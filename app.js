const express = require("express");
const app = express();
// const tasks = require("./routes/tasks");
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.static("./public"));
app.use(express.json())

app.get('/');

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

