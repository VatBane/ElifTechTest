const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  price: {
    type: mongoose.Types.Decimal128,
    required: [true, 'must provide price'],
    max: 500.00,
  },
  amount: {
    type: Number,
    default: 1,
    max: 5,
  },
  shop: {
    type: String,
    required: [true, "must provide shop name"],
    trim: true,
    maxlength: [20, "shop name can not be more than 20 characters"]
  },
  short: {
    type: String,
    default: 'product'    
  }
});

module.exports = mongoose.model("Product", ProductSchema);
