const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const buddiesDbUri = process.env.DATABASE_URI;
const client = new MongoClient(buddiesDbUri);
// const connection = await client.connect();
// let connection;
// try {
//   connection = await client.connect();
// } catch (error) {
//   console.log(error);
// }
let SleepingBuddiesDb;
const mongoConnect = async () => {
  try {
    const connection = await client.connect();
    SleepingBuddiesDb = connection.db("SleepingBuddiesDb");
  } catch (error) {
    console.log(error);
  }
};
mongoConnect();
module.exports = SleepingBuddiesDb;
