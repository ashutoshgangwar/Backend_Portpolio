const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ashutoshgangwar1994:3tYg3mz6arUuv1MQ@my-portpholio.vbzlr.mongodb.net/registation')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Connection error', err);
  });
