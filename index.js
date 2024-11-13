const express = require("express");
const cors = require("cors");
require("./DB/config");
const User = require("./DB/users");
const signupuser = require("./DB/signupuser");
const app = express();

// Enable CORS for multiple frontend URLs
const allowedOrigins = [
  'http://192.168.1.5:3000',
  'http://localhost:3000',  // Example for local development
  'https://ashutoshgangwar.netlify.app/' // Add more URLs as needed
];

app.use(cors({
  origin: 'http://192.168.1.5:3000', // Replace with your frontend's URL
}));

app.use(express.json()); // Middleware to parse JSON

// Register route
app.post("/register", async (req, resp) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
  } catch (error) {
    resp.status(500).send({ message: "Error saving user", error });
  }
});

// Signup route
app.get("/users", async (req, resp) => {
  try {
    let users = await User.find();
    resp.send(users);
  } catch (error) {
    resp.status(500).send({ message: "Error fetching users", error });
  }
});

// Use PORT from environment or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
