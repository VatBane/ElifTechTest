const express = require("express");
const router = express.Router();

const {getAllOrders, createOrder} = require('../controllers/cart');
const {getProduct} = require('../controllers/shops');
// const {
//   getAllOrders,
//   getOrder,
//   createOrder,
//   updateOrder,
//   deleteOrder
// } = require('../controllers/shop')

router.route('/').get(getAllOrders).post(createOrder);
router.route('/:id').get(getProduct);
// router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;