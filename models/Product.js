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
    max: 200.00,
  },
  shop: {
    type: String,
    required: [true, "must provide shop name"],
    trim: true,
    maxlength: [20, "shop name can not be more than 20 characters"]
  }
});

module.exports = mongoose.model("Product", ProductSchema);
