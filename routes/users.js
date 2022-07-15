const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUser,
  createUser,
  createToken
} = require('../controllers/users')

router.route('/').get(getAllUsers).post(createUser);
router.route('/:login').get(getUser);
router.route('/login').post(createToken);

module.exports = router;