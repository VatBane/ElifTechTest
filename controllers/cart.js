const Order = require('../models/Order')

const getOrder = (req, res) => {

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
