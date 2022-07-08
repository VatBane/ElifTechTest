const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide shop name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  urlAllias: {
    type: String,
    required: [true, "must provide alias without spaces"],
    trim: true,
    maxlength: [20, "alias can not be more than 20 characters"]
  }
});

module.exports = mongoose.model("Shop", ShopSchema);
