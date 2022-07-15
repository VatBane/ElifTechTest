const express = require("express");
const app = express();
const connectDB = require('./db/connect')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const crypto = require('crypto-js');
const cookieParser = require('cookie-parser')

// routers
const shops = require("./routes/shops");
const admin = require("./routes/admin");
const cart = require("./routes/cart");
const users = require('./routes/users');

// middleware
app.use(express.static("./public"));
app.use(express.json())
app.use(cookieParser())

// routes
app.use('/api/v1/shops', shops)
app.use('/api/v1/admin', admin)
app.use('/api/v1/cart', cart)
app.use('/api/v1/users', users)

app.get('/history', async (req, res)=>{
  try {
    const decoded = jwt.verify(req.cookies.access_token, process.env.JWT_SECRET);
  } catch (error) {
    res.redirect('/login'); 
  }
})

app.get('/login', (req, res) => {
  // jwt.verify(req.headers.authorization, process.env.JWT_SECRET, (err, decoded)=>{
  //   console.log(decoded);
  // });  

  // jwt.sign({login: req.body.login}, process.env.JWT_SECRET, (err, token)=> {
  //   console.log(err, token);
  // })

  res.sendFile(__dirname + '/public/login.html')
})

const port = process.env.PORT || 8080;

const start = async ()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log("Server successfully started..."));
  } catch (error) {
    console.log(error);
  }
}

start()



