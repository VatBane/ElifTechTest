const User = require('../models/User')
const crypto = require('crypto-js')
const passPhrase = 'silvio';

const getUser = async (req, res) => {
  const bytes = crypto.AES.decrypt(encodedPass, passPhrase);
  const originalText = bytes.toString(crypto.enc.Utf8);
  console.log(originalText);
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
  } catch (error) {
    res.status(500).json({ error });
  }
  const bytes = crypto.AES.decrypt(encodedPass, passPhrase);
  const originalText = bytes.toString(crypto.enc.Utf8);
  console.log(originalText);
}

const createUser = async (req, res) => {
  try {
    const { login, password } = req.body;
    const encodedPass = crypto.AES.encrypt(password, passPhrase).toString();
    const user = await User.create({login: login, password: encodedPass});
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}

module.exports = {
  getUser,
  getAllUsers,
  createUser,
}