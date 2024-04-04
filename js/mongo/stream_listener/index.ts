import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "alyneKickStartDB";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  
  try {
    const db = client.db(dbName);
    const collection = db.collection("questionnaire");

    const changeStream = collection.watch();

    changeStream.on("change", (change) => {
      console.log("Change detected:");
      console.log(change);
    });
  } finally {
    client.close();
  }
  // Keep the process running indefinitely
  await new Promise(() => {});
}

main().then(console.log).catch(console.error);
