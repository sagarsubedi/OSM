import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  if (!client.isConnected()) await client.connect().then(() => console.log("Connected to MongoDB from dbConnect.js"));
  const db = client.db("dev_OSM");
  return { db, client };
}

export { connect };