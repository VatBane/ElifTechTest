const User = require('../models/User')
const cryptoJS = require('crypto-js')
// const passPhrase = 'silvio';

const createToken = async (data) => {
  const headers = {
    alg: "HS256",
    typ: "JWT"
  }
  let wordArray = cryptoJS.enc.Utf8.parse(JSON.stringify(headers));
  const headEnc = cryptoJS.enc.Base64url.stringify(wordArray);

  wordArray = cryptoJS.enc.Utf8.parse(JSON.stringify(data));
  const payload = cryptoJS.enc.Base64url.stringify(wordArray);

  const string = headEnc + '.' + payload;
  let signature = cryptoJS.HmacSHA256(string, process.env.JWT_SECRET);
  signature = cryptoJS.enc.Base64url.stringify(signature);

  return headEnc + "." + payload + "." + signature;
}

const getUser = async (req, res) => {
  try {
    // const { login } = req.params
    // const user = await User.findOne({ login });
    // res.status(201).json({ user });

    const { login , password} = req.body;
    const user = await User.findOne({ login });
    if (!user) {
      return res.status(400).json({msg: `Invalid login`})
    }
    const bytes = cryptoJS.AES.decrypt(user.password, process.env.JWT_SECRET);
    const dbPass = bytes.toString(cryptoJS.enc.Utf8);
    if (dbPass != password) {
      return res.status(400).json({msg: `Invalid password`})
    }
    const token = await createToken({login, admin: user.isAdmin});
    res.status(200).json({token})
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  // const bytes = crypto.AES.decrypt(encodedPass, passPhrase);
  // const originalText = bytes.toString(crypto.enc.Utf8);
  // console.log(originalText);
}

const createUser = async (req, res) => {
  try {
    const { login, password } = req.body;
    let user = await User.findOne({login: login});
    if (user) {
      return res.status(400).json({msg: 'Login is occupied'});
    }
    const encodedPass = cryptoJS.AES.encrypt(password, process.env.JWT_SECRET).toString();
    console.log(req.body);
    user = await User.create({login: login, password: encodedPass});
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
}

module.exports = {
  getUser,
  getAllUsers,
  createUser,
  createToken
}