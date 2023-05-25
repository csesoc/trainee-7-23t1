const express = require("express");
const app = express();
const dotenv = require("dotenv");
const buddyDexRouter = require("./routes/buddyDex");
const buddiesRouter = require("./routes/buddies");
// const mongoose = require("mongoose");
// mongoose.connect();
const cors = require("cors");
app.use(cors());
app.use(express.json());

dotenv.config();

const portNumber = 3001;

app.use("/buddies", buddiesRouter);

// Will invoke the middleware function "buddyDexRouter" for all requests which match the math /buddyDex
app.use("/buddyDex", buddyDexRouter);

app.listen(portNumber, () => {
  console.log(`The server is running on port ${portNumber}`);
});
