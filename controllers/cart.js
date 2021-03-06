const Order = require('../models/Order');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    if (!orders) {
      return res.status(404).json({msg: `There is no orders`})
    }
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    const decoded = jwt.verify(req.cookies.access_token, process.env.JWT_SECRET);
    if (decoded) {
      const user = await User.findOneAndUpdate({login: decoded.login}, {$push: {orders: order._id}});
    } 
    res.status(201).json({ order });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

module.exports = {getAllOrders, createOrder}
