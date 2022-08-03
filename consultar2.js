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
    const query = { "Cedula": 103544367 };

    /*const options = {
      // sort matched documents in descending order by rating
      sort: { "imdb.rating": -1 },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, title: 1, imdb: 1 },
    };*/

    const movie = await aprendices.findOne(query);

    // since this method returns the matched document, not a cursor, print it directly
    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
