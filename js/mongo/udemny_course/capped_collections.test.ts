import { beforeAll, beforeEach, describe, expect, test } from "bun:test";
import { Collection, MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

await client.connect();
const db = client.db("udemy_course");

describe("capped collections", () => {
  let cappedCollection: Collection;
  beforeEach(async () => {
    await db.dropCollection("capped");
    cappedCollection = await db.createCollection("capped", {
      capped: true,
      size: 10000,
      max: 2, // Max of two records
    });
  });

  test("should have max records", async () => {
    await cappedCollection.bulkWrite([
      { insertOne: { document: { name: "Max" } } },
      { insertOne: { document: { name: "Manuel" } } },
      { insertOne: { document: { name: "Anna" } } },
    ]);

    const count = await cappedCollection.countDocuments({});
    expect(count).toBe(2);
  });

  test("the insert order is the retrieve order", async () => {
    await cappedCollection.bulkWrite([
      { insertOne: { document: { name: "Max" } } },
      { insertOne: { document: { name: "Manuel" } } },
    ]);

    const iterator = cappedCollection.find({});
    const names = [];
    while (await iterator.hasNext()) {
      const record = await iterator.next();
      names.push(record!.name);
    }
    expect(names).toEqual(["Max", "Manuel"]);
  });

  test("$natural order", async () => {
    await cappedCollection.bulkWrite([
      { insertOne: { document: { name: "A" } } },
      { insertOne: { document: { name: "B" } } },
    ]);
    const iterator = cappedCollection.find().sort({ $natural: -1 }); // natural order
    expect((await iterator.next())!.name).toBe("B");
    expect((await iterator.next())!.name).toBe("A");
  });
});
