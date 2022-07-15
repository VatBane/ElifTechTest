const express = require("express");
const router = express.Router();

const {
  createUser
} = require('../controllers/users')

router.route('/').get().post(createUser);

module.exports = router;