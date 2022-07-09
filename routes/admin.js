const express = require("express");
const router = express.Router();

const {
  createShop,
  // updateShop,
  // deleteShop,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/admin')

router.route('/shop').post(createShop);
router.route('/product').post(createProduct);
router.route('/product/:id').patch(updateProduct).delete(deleteProduct);

module.exports = router;