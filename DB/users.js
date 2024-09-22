const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    phonenumber: Number,
    email: String,
    subject: String
  });

  module.exports = mongoose.model("users", userSchema);

  