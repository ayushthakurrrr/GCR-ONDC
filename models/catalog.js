const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  item_id: { type: String, required: true },
  name: { type: String, required: true },
  description: String,
  images: [String],
  category_id: String,
  price: {
    currency: String,
    value: Number,
    max_value: Number,
  },
  quantity: {
    available: Number,
    maximum: Number,
  },
  fulfillment_id: String,
  location_id: String,
  attributes: Object,
  tags: [String],
});

const CatalogSchema = new mongoose.Schema({
  catalog_id: { type: String, required: true, unique: true },
  bpp_id: { type: String, required: true },
  bpp_name: String,
  bpp_uri: String,
  items: [ItemSchema],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Catalog', CatalogSchema);
