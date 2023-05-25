// Mini-express applications i.e. app = express()
// That independetly manage their own routes and middleware
// Which is then mounted onto the main web server application using app.use()
const express = require("express");
const db = require("../database");
const router = express.Router();

// Return an array of all buddy dex entries
router.get("/get", async (req, res) => {
  let collection = await db.collection("buddiesDex");
  let buddiesDexEntries = await collection.find({}).toArray();
  res.send(buddiesDexEntries).status(200);
});

module.exports = router;
