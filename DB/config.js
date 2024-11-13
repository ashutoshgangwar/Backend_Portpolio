const mongoose = require('mongoose');

<<<<<<< HEAD
// Replace '1234' with your actual password and remove the angle brackets
mongoose.connect('mongodb+srv://ashutoshgangwar1994:3tYg3mz6arUuv1MQ@my-portpholio.vbzlr.mongodb.net/registation', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Connection error', err);
});
=======
mongoose.connect('mongodb+srv://ashutoshgangwar1994:3tYg3mz6arUuv1MQ@my-portpholio.vbzlr.mongodb.net/registation')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Connection error', err);
  });
>>>>>>> 50477339d26e847cacf74ca16a4b2b08d877ae4c
