//import { MongoClient } from "mongodb";
const MongoClie = require("mongodb").MongoClient

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://MateoOrtizLopez:123456Mateo@clusteradsi2364481.aapmh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClie(uri);

async function run() {
  try {
    const database = client.db("FakeStore");
    const aprendices = database.collection("APRENDICES");

    // Query for a movie that has the title 'The Room'
    
    const doc = {
        "Cedula": "1000894577",
        "Nombre": "Mateo",
        "Edad": "20"
      }
    const result = aprendices.insertOne(doc);
    console.log(result);
    
  } finally {
    await client.close();
  }
}
run().catch(console.dir);   
