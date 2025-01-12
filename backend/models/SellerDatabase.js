const mongoose = require('mongoose');

// **Generalized Product Schema for Seller Database**
const ProductSchema = new mongoose.Schema({
  product_id: { type: String, required: true },
  name: { type: String, required: true },
  description: String,
  category_id: { type: String, required: true },
  attributes: Object, // Dynamic key-value pairs for product-specific attributes
  price: {
    currency: { type: String, required: true },
    mrp: { type: Number, required: true }, // Maximum Retail Price
    selling_price: { type: Number, required: true }, // Actual Selling Price
  },
  stock_quantity: { type: Number, default: 0 },
  images: [String],
  tags: [String],
  fulfillment_details: {
    type: { type: String, required: true }, // Delivery, Self-Pickup, etc.
    time_to_ship: { type: String, required: true }, // Example: "PT48H"
    returnable: { type: Boolean, default: false },
    cancellable: { type: Boolean, default: false },
    return_window: { type: String } // Example: "P7D" (7 Days)
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// **Seller Schema**
const SellerSchema = new mongoose.Schema({
  seller_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  contact_details: {
    phone: { type: String, required: true },
    email: { type: String, required: true }
  },
  location: {
    gps: String,
    address: {
      locality: String,
      city: String,
      state: String,
      pincode: String
    }
  },
  serviceable_pincodes: [String],
  products: [ProductSchema], // Array of products provided by the seller
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// **Seller Database Schema** (Array of Sellers)
const SellerDatabaseSchema = new mongoose.Schema({
  sellers: [SellerSchema] // Array of seller objects
});

module.exports = mongoose.model('SellerDatabase', SellerSchema, 'sellers-db');