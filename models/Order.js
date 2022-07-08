const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  products: {
    type: Array,
    required: [true, 'Please, order something...']
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, {timestamp: true});

module.exports = mongoose.model("Order", OrderSchema);
