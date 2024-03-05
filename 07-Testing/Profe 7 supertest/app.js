const express = require("express");
const app = express();

app.get("/", (req, res) =>
  res.json({ message: "Server listening..." }));
app.get("/character", (req, res) => 
  res.status(200).json({ name: "Rick", lastname: "Sanchez" })
);

module.exports = app;