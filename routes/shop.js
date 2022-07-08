const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  createShop,
} = require('../controllers/shop')

router.route('/').post(createShop);
router.route('/:shop/id').post(createProduct);
router.route('/:shop').get(getAllProducts);
router.route('/:shop/id/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);
//router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;