const mongoose = require('mongoose');

// Generalized Products Schema for Seller Database
const ProductSchema = new mongoose.Schema({
  product_id: { type: String, required: true },
  name: { type: String, required: true },
  description: String,
  category_id: { type: String, required: true },
  attributes: Object,
  price: {
    currency: { type: String, required: true },
    mrp: { type: Number, required: true },
    selling_price: { type: Number, required: true },
  },
  stock_quantity: { type: Number, default: 0 },
  images: [String],
  tags: [String],
  fulfillment_details: {
    type: { type: String, required: true },
    time_to_ship: { type: String, required: true },
    returnable: { type: Boolean, default: false },
    cancellable: { type: Boolean, default: false },
    return_window: { type: String }
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});


// Seller Schema
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
  products: [ProductSchema],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// **Seller Database Schema**
const SellerDatabaseSchema = new mongoose.Schema({
  sellers: [SellerSchema]
});

module.exports = mongoose.model('SellerDatabase', SellerSchema, 'sellers-db');