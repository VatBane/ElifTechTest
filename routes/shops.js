const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProduct,
  getAllShops,
} = require('../controllers/shops')

router.route('/').get(getAllShops);
router.route('/:shop').get(getAllProducts);
router.route('/:shop/id/:id').get(getProduct);

module.exports = router;