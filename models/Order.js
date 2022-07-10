const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  products: {
    type: Array,
    required: [true, 'Please, order something...']
  },
  customer_name: {
    type: String,
    required: [true, 'Please, provide name'],
    trim: true,
  },
  customer_address: {
    type: String,
    required: [true, 'Please, provide address'],
    trim: true,
  },
  customer_phone: {
    type: String,
    required: [true, 'Please, provide phone number']
  },
  customer_email: {
    type: String,
    required: [true, 'Please, provide email address']
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, {timestamp: true});

module.exports = mongoose.model("Order", OrderSchema);
