const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017";
const dbName = "note";
const collectionName = "AJAX";

async function startServer() {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    app.get("/api/notes", async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");  
      try {
        const query = { title: "原生AJAX" };
        const note = await collection.findOne(query);
        res.json(note);
      } catch (err) {
        console.error("Failed to fetch note:", err);
        res.status(500).json({ error: "Failed to fetch note" });
      }
    });

    const port = 3000;
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
}

startServer();
