const express = require("express");
const app = express();
const connectDB = require('./db/connect')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const crypto = require('crypto-js');

// routers
const shops = require("./routes/shops");
const admin = require("./routes/admin");
const cart = require("./routes/cart");
const users = require('./routes/users');

// middleware
app.use(express.static("./public"));
app.use(express.json())

// routes
app.use('/api/v1/shops', shops)
app.use('/api/v1/admin', admin)
app.use('/api/v1/cart', cart)
app.use('/api/v1/users', users)

const isLogin = (req, res, next) => {
  if (req.headers.authorization) {
    jwt.verify(
      req.headers.authorization.split(' ')[1],
      tokenKey,
      (err, payload) => {
        if (err) next()
        else if (payload) {
          for (let user of users) {
            if (user.id === payload.id) {
              req.user = user
              next()
            }
          }

          if (!req.user) next()
        }
      }
    )
    
  }
  next();
}

app.get('/history', isLogin, (req, res)=>{
  res.sendFile(__dirname + '/public/history.html')
})

app.get('/login', (req, res) => {
  res.send('login')
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



