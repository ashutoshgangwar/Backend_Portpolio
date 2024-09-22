const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String,
    phonenumber: Number,
    email: String,
    passward: String
},

{ collection: 'signup' } 

  );

  module.exports = mongoose.model("signup", userSchema);

  