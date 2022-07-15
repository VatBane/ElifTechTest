const Order = require('../models/Order');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const getHistory = async (req, res) => {
  try {
    const decoded = jwt.verify(req.cookies.access_token, process.env.JWT_SECRET);
    const user = await User.findOne({login: decoded.login});
    
    if (!user) {
      return res.status(404).json({msg: `There is no such user`});
    }
    res.status(200).json({user});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

const getOrder = async (req, res) => {
  try {
    const {id} = req.params;
    const order = await Order.findOne({_id: id});
    if (!order) {
      return res.status(404).json({msg: `There is no such an order`})
    }
    res.status(200).json({ order: order, time: order.createdAt });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

module.exports = {
  getHistory,
  getOrder
}