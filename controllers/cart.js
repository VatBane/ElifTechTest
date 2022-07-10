const Order = require('../models/Order')
const path = require('path');

const getOrder = async (req, res) => {
  try {
    console.log(req.sessionID);
    const order = await Order.find({});
    if (!order) {
      return res.status(404).json({msg: `There is no such an order`})
    }
    res.status(200).json({ order });
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

module.exports = {getOrder, createOrder}
