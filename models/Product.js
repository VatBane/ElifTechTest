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
});

module.exports = mongoose.model("Product", ProductSchema);
