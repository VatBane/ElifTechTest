const Order = require('../models/Order')
const path = require('path');

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    if (!orders) {
      return res.status(404).json({msg: `There is no such an order`})
    }
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({ order });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

module.exports = {getAllOrders, createOrder}
