const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Insert or Update a Product with Seller Details
// Insert or update product details and seller details
router.post('/', async (req, res) => {
  try {
    const { product_id, name, description, category_id, attributes, tags, images, sellers } = req.body;

    // ✅ Validate sellers array
    if (!sellers || !Array.isArray(sellers) || sellers.length === 0) {
      return res.status(400).json({ error: 'Sellers array is required and must not be empty.' });
    }

    // ✅ Filter out any null or undefined values in the sellers array
    const validSellers = sellers.filter(seller => seller && seller.seller_id);

    if (validSellers.length === 0) {
      return res.status(400).json({ error: 'Sellers array must contain valid seller objects.' });
    }

    // Check if the product already exists
    let product = await Product.findOne({ product_id });

    if (!product) {
      // ✅ If the product doesn't exist, create a new product with the valid sellers array
      product = new Product({
        product_id,
        name,
        description,
        category_id,
        attributes,
        tags,
        images,
        sellers: validSellers // Add the cleaned sellers array
      });
    } else {
      // ✅ If the product exists, ensure the sellers array is initialized
      if (!Array.isArray(product.sellers)) {
        product.sellers = [];
      }

      // ✅ Update or add each seller in the sellers array
      validSellers.forEach((newSeller) => {
        const existingSellerIndex = product.sellers.findIndex(
          (seller) => seller && seller.seller_id === newSeller.seller_id
        );

        if (existingSellerIndex !== -1) {
          // ✅ Update existing seller details
          product.sellers[existingSellerIndex] = newSeller;
        } else {
          // ✅ Add new seller details
          product.sellers.push(newSeller);
        }
      });

      // Update the updated_at field
      product.updated_at = Date.now();
    }

    // Save the product to the database
    const savedProduct = await product.save();
    res.status(200).json({ message: 'Product saved successfully!', product: savedProduct });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search for Products by Category or Name
router.get('/search', async (req, res) => {
  try {
    const { category, name } = req.query;
    const filter = {};

    if (category) filter.category_id = category;
    if (name) filter.name = new RegExp(name, 'i');

    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a Product by product_id
router.delete('/:product_id', async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({ product_id: req.params.product_id });
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a Seller from a Product
router.delete('/:product_id/sellers/:seller_id', async (req, res) => {
  try {
    const { product_id, seller_id } = req.params;

    // Find the product by product_id
    const product = await Product.findOne({ product_id });
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Filter out the seller to be deleted
    product.sellers = product.sellers.filter((seller) => seller.seller_id !== seller_id);

    // Save the updated product
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Sellers for a Product
router.get('/:product_id/sellers', async (req, res) => {
  try {
    const { product_id } = req.params;

    // Find the product by product_id
    const product = await Product.findOne({ product_id });
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json(product.sellers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update catalog details by seller_id
router.put('/:seller_id', async (req, res) => {
  try {
    const { seller_id } = req.params;

    // Find the catalog by seller_id and update it with the request body
    const updatedCatalog = await Catalog.findOneAndUpdate(
      { seller_id },
      { $set: req.body },
      { new: true }
    );

    if (!updatedCatalog) {
      return res.status(404).json({ message: 'Catalog not found' });
    }

    res.json(updatedCatalog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;