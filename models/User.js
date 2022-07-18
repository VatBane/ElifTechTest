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
    required: [true, 'Please, provide password']
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  orders: {
    type: Array,
  }
});

module.exports = mongoose.model("User", UserSchema);
