const mongoose = require('mongoose');

const SellerDetailsSchema = new mongoose.Schema({
  seller_id: { type: String, required: true, unique: true },
  seller_name: { type: String, required: true },
  price: {
    currency: { type: String, required: true },
    value: { type: Number, required: true },
    max_value: { type: Number },
  },
  stock_quantity: { type: Number, required: true },
  fulfillment_details: {
    type: { type: String, required: true }, // e.g., Delivery or Self-Pickup
    time_to_ship: { type: String, required: true }, // e.g., PT48H
    returnable: { type: Boolean, required: true },
    cancellable: { type: Boolean, required: true },
    return_window: { type: String }, // e.g., P10D
  },
  serviceable_pincodes: [String],
});

const ProductSchema = new mongoose.Schema({
  product_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  category_id: { type: String, required: true },
  attributes: { type: Object }, // Dynamic attributes
  tags: [String],
  images: [String],
  sellers: [SellerDetailsSchema], // List of sellers offering this product
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);