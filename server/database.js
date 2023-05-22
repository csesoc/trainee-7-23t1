import { MongoClient } from "mongodb";

const buddiesDbUri = process.env.DATABASE_URI;
const client = new MongoClient(buddiesDbUri);
connection = await client.connect();

let SleepingBuddiesDb = connection.db("SleepingBuddiesDb");

export default SleepingBuddiesDb;
