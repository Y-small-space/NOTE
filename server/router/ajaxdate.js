const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017";
const dbName = "note";
const collectionName = "AJAX";

MongoClient.connect(url, { useNewUrlParser: true })
  .then((client) => {
    console.log("Connected to MongoDB");
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    router.get("/api/notes", async (req, res) => {
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
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

module.exports = router;
