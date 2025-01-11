const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Insert or Update a Product with Seller Details
router.post('/', async (req, res) => {
  try {
    const { product_id, seller_details } = req.body;

    // Find product by product_id
    let product = await Product.findOne({ product_id });

    if (!product) {
      // If product doesn't exist, create a new product
      product = new Product({
        product_id,
        name: req.body.name,
        description: req.body.description,
        category_id: req.body.category_id,
        attributes: req.body.attributes,
        tags: req.body.tags,
        images: req.body.images,
        sellers: [seller_details] // Initialize sellers array with the first seller
      });
    } else {
      // If product exists, check if the seller already exists
      const existingSellerIndex = product.sellers.findIndex(
        (seller) => seller.seller_id === seller_details.seller_id
      );

      if (existingSellerIndex !== -1) {
        // Update existing seller details
        product.sellers[existingSellerIndex] = seller_details;
      } else {
        // Add new seller details
        product.sellers.push(seller_details);
      }
    }

    // Save product to the database
    const savedProduct = await product.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
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
module.exports = router;
