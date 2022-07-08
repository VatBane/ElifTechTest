const express = require("express");
const app = express();
const shop = require("./routes/shop");
// const cart = require("./routes/cart");
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.static("./public"));
app.use(express.json())

// routes
app.use('/api/v1/shop', shop)
// app.use('/api/v1/cart', cart)

const port = 8080;
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

