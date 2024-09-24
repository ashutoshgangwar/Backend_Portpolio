const mongoose = require('mongoose');

// Replace '1234' with your actual password and remove the angle brackets
mongoose.connect('mongodb+srv://Portpholiodatabase:1234@cluster0.r0w0o.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Connection error', err);
});
