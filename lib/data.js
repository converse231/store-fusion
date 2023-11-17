import { MongoClient } from "mongodb";
import clientPromise from "./db";

let client = MongoClient;
let db;
let stores;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db();
    stores = db.collection("Stores");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to connect to the database");
  }
}

(async () => {
  await init();
})();

export const getStores = async () => {
  try {
    if (!stores) await init();

    const pipeline = [{ $skip: 0 }, { $limit: 20 }];

    const result = await stores.aggregate(pipeline).toArray();

    return result;
  } catch (error) {
    return { error };
  }
};
