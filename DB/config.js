const mongoose = require('mongoose');

// Replace '1234' with your actual password and remove the angle brackets
mongoose.connect('mongodb://localhost:27017/registation', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Connection error', err);
});
