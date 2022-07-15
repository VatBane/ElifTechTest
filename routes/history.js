const express = require("express");
const router = express.Router();

const { 
  getHistory,
} = require('../controllers/history')

// router.route('/').get().post();
router.route('/').get(getHistory).patch().delete();

module.exports = router;