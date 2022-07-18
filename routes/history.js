const express = require("express");
const router = express.Router();

const { 
  getHistory,
  getOrder
} = require('../controllers/history')

// router.route('/').get().post();
router.route('/').get(getHistory).patch().delete();
router.route('/:id').get(getOrder);

module.exports = router;