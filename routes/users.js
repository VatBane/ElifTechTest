const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUser,
  createUser
} = require('../controllers/users')

router.route('/').get(getAllUsers).post(createUser);
router.route('/:login').get(getUser);
module.exports = router;