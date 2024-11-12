const express = require("express");
const cors = require("cors");
require("./DB/config");
const User = require("./DB/users");
const signupuser = require("./DB/signupuser");
const app = express();

// Enable CORS for your frontend URL
app.use(cors({
  origin: 'http://192.168.1.5:3000', // Replace with your frontend's URL
  methods: "GET,POST,PUT,DELETE", // Specify allowed HTTP methods
  allowedHeaders: "Content-Type,Authorization" // Specify allowed headers
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
app.get("/register", async (req, resp) => {
  resp.send("server is running and  make his build");
});

// Use PORT from environment or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
