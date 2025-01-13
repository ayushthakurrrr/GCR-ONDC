const mongoose = require('mongoose');

const SellerDetailsSchema = new mongoose.Schema({
  seller_id: { type: String, required: true },
  seller_name: { type: String, required: true },
  serviceable_pincodes: [String],
});

const ProductSchema = new mongoose.Schema({
  product_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  mrp: { type: Number, required: true },
  category_id: { type: String, required: true },
  attributes: { type: Object }, // Dynamic attributes
  tags: [String],
  images: [String],
  sellers: [SellerDetailsSchema], // List of sellers offering this product
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema,'GCR-products');