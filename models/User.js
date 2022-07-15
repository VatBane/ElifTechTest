const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  login: {
    type: String,
    required: [true, 'Please, provide login'],
    minlength: [6, 'login must be more 6 symbols'],
    maxlength: [20, 'login must be less 20 symbols']    
  },
  password: {
    type: String,
    required: [true, 'Please, provide password'],
    minlength: [6, 'login must be more 6 symbols'],
    maxlength: [20, 'login must be less 20 symbols']    
  }
});

module.exports = mongoose.model("User", UserSchema);
