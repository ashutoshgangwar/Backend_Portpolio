const express = require("express");
const cors = require("cors");
require("./DB/config");
const User = require("./DB/users");
const signupuser = require("./DB/signupuser");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  resp.send(result);
});


app.post("/signup", async (req, resp) => {
  let user = new signupuser(req.body);
  let result = await user.save();
  resp.send(result);
});


app.listen(5000
  , () => {
  console.log("Server is running on port 5000");
});
