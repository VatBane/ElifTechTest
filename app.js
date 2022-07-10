const express = require("express");
const app = express();
const session = require('express-session');
const crypto = require('crypto');
const shops = require("./routes/shops");
const admin = require("./routes/admin");
const cart = require("./routes/cart");
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.static("./public"));
app.use(express.json())
app.use(session({
  genid: function(req) {
    return crypto.randomUUID() // use UUIDs for session IDs
  },
  secret: 'keyboard cat'
}))

// routes
app.use('/api/v1/shops', shops)
app.use('/api/v1/admin', admin)
app.use('/api/v1/cart', cart)

const port = proccess.env.PORT || 8080;
//app.listen(8080, console.log('Server succesfullt started..'));

const start = async ()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log("Server successfully started..."));
  } catch (error) {
    console.log(error);
  }
}

start()

