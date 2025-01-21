const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Insert or update product details and seller details
router.post('/', async (req, res) => {
  try {
    const { product_id, name, description, category_id, attributes, tags, images, sellers } = req.body;

    if (!sellers || !Array.isArray(sellers) || sellers.length === 0) {
      return res.status(400).json({ error: 'Sellers array is required and must not be empty.' });
    }

    const validSellers = sellers.filter(seller => seller && seller.seller_id);

    if (validSellers.length === 0) {
      return res.status(400).json({ error: 'Sellers array must contain valid seller objects.' });
    }

    let product = await Product.findOne({ product_id });

    if (!product) {
      product = new Product({
        product_id,
        name,
        description,
        category_id,
        attributes,
        tags,
        images,
        sellers: validSellers
      });
    } else {
      if (!Array.isArray(product.sellers)) {
        product.sellers = [];
      }

      validSellers.forEach((newSeller) => {
        const existingSellerIndex = product.sellers.findIndex(
          (seller) => seller && seller.seller_id === newSeller.seller_id
        );

        if (existingSellerIndex !== -1) {
          product.sellers[existingSellerIndex] = newSeller;
        } else {
          product.sellers.push(newSeller);
        }
      });

      product.updated_at = Date.now();
    }

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

    const product = await Product.findOne({ product_id });
    if (!product) return res.status(404).json({ message: 'Product not found' });

    product.sellers = product.sellers.filter((seller) => seller.seller_id !== seller_id);

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

    const product = await Product.findOne({ product_id });
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json(product.sellers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;