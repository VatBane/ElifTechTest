const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProduct,
  createProduct
} = require('../controllers/shop')

router.route('/').get(getAllProducts).post(createProduct);

module.exports = router;