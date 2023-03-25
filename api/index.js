require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
const mongoose = require("mongoose");
const User = require("./models/User");

const port = process.env.PORT || 5000;
server.use(cors());
server.use(express.json()); // middleware for body json

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mern-blog");
  console.log("Database connected successfully...");
}

server.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({ username, password });
        res.json(userDoc);
    } catch (error) {
      res.status(400).json(error)
    }
});

server.listen(port, () => {
  console.log(`Server started on ${port} port successfully..`);
});
