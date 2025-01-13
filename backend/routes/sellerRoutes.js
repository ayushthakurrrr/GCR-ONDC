const express = require('express');
const router = express.Router();
const SellerDatabase = require('../models/SellerDatabase'); // Import the seller database model

// GET dynamic product details from the seller database
router.get('/products/:product_id', async (req, res) => {
  try {
    const { product_id } = req.params;

    // Find sellers offering the product
    const sellers = await SellerDatabase.find({
      'products.product_id': product_id,
    });

    if (!sellers.length) {
      return res.status(404).json({ message: 'Product not found in any seller database' });
    }

    // Extract relevant product details from each seller, excluding out-of-stock sellers
    const dynamicDetails = sellers
      .map((seller) => {
        const product = seller.products.find((p) => p.product_id === product_id);

        // Return seller details only if stock_quantity is greater than 0
        if (product && product.stock_quantity > 0) {
          return {
            seller_id: seller.seller_id,
            seller_name: seller.name,
            stock_quantity: product.stock_quantity,
            price: product.price,
            fulfillment_details: product.fulfillment_details,
          };
        }
      })
      .filter(Boolean); // Remove undefined values (out-of-stock sellers)

    if (!dynamicDetails.length) {
      return res.status(404).json({ message: 'Product is currently out of stock with all sellers.' });
    }

    res.json(dynamicDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
