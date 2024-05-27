const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  articleNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, enum: ['formal', 'casual', 'slippers'], required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  sizes: { type: [Number], required: true },
  imageUrl: { type: String }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
