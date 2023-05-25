const express = require("express");
const db = require("../database");
const ObjectId = require("mongodb");

// TODO: Error handling in routes
const router = express.Router();

router.get("/get", async (req, res) => {
  let buddiesCollection = db.collection("buddies");
  let buddies = buddiesCollection.find({}).toArray();
  res.send(buddies).status(200);
});

router.post("/post", async (req, res) => {
  let buddies = db.collection("buddies");
  let newBuddiesEntry = {
    alive: req.body.alive,
    name: req.body.name,
    species_name: req.body.species_name,
    description: req.body.description,
    fact: req.body.fact,
    limbs: req.body.limbs,
  };
  let result = await buddies.insertOne(newBuddiesEntry);
  res.send(`A new buddies entry was added with _id: ${result}`);
  res.send(result).status(200);
});

router.put("/put/:id", async (req, res) => {
  let buddies = db.collection("buddies");
  const query = { _id: ObjectId(req.params.id) };
  const updateDocument = { $set: req.body };
  let result = await buddies.updateOne(query, updateDocument);
  res.send(result).status(200);
});

router.delete("/delete/:id", async (req, res) => {
  let buddies = db.collection("buddies");
  const query = { _id: ObjectId(req.params.id) };
  let result = await buddies.deleteOne(query);
  res.send(result).status(200);
});

module.exports = router;
