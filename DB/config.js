const mongoose = require('mongoose');

// Replace '1234' with your actual password and remove the angle brackets
mongoose.connect('mongodb+srv://ashutoshgangwar1994:3tYg3mz6arUuv1MQ@my-portpholio.vbzlr.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Connection error', err);
});
