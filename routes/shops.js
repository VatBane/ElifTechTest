const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProduct,
  getAllShops,
} = require('../controllers/shop')

router.route('/').get(getAllShops);
router.route('/:shop').get(getAllProducts);
router.route('/:shop/id/:id').get(getProduct);
//router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;