import dotenv from "dotenv";

const express = require("express");
const app = express();
// const mongoose = require("mongoose");
// mongoose.connect();
const cors = require("cors");
app.use(cors());
app.use(express.json());

dotenv.config();

const portNumber = 3001;

app.get("/test", (req, res) => {
  res.send("Hello world!");
});

app.post("/register", (req, res) => {
  res.send("POST request for register!");
});

app.listen(portNumber, () => {
  console.log(`The server is running on port ${portNumber}`);
});
