const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/shop')

router.route('/').post(createProduct);
router.route('/:shop').get(getAllProducts);
//router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;