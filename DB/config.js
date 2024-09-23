const mongoose = require('mongoose');

// Ensure your connection string starts with mongodb:// or mongodb+srv://
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/myDatabase';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));
