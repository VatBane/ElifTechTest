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
const history = require('./routes/history.js');

// middleware
app.use(express.static("./public"));
app.use(express.json())
app.use(cookieParser())

// routes
app.use('/api/v1/shops', shops)
app.use('/api/v1/admin', admin)
app.use('/api/v1/cart', cart)
app.use('/api/v1/users', users)
app.use('/api/v1/history', history);

app.get('/cart', (req, res)=>{
  res.sendFile(__dirname + "/public/cart.html");
})

app.get('/history', async (req, res)=>{
  try {
    const decoded = jwt.verify(req.cookies.access_token, process.env.JWT_SECRET);
    res.sendFile(__dirname+ "/public/history.html");
  } catch (error) {
    res.redirect('/login'); 
  }
})

app.get('/login', (req, res) => {
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



