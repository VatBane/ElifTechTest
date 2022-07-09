const express = require("express");
const router = express.Router();

const {getOrder, createOrder} = require('../controllers/cart');

// const {
//   getAllOrders,
//   getOrder,
//   createOrder,
//   updateOrder,
//   deleteOrder
// } = require('../controllers/shop')

router.route('/').get(getOrder).post(createOrder);
// router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;