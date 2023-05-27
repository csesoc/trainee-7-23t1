const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const buddiesDbUri = process.env.DATABASE_URI;
const client = new MongoClient(buddiesDbUri);

let SleepingBuddiesDb = client.db("SleepingBuddiesDb");
let buddies = SleepingBuddiesDb.collection("buddies");
let buddiesDex = SleepingBuddiesDb.collection("buddiesDex");
module.exports = {
  buddies: buddies,
  buddiesDex: buddiesDex,
};
