require("dotenv").config();
const express = require("express");

const app = express();
// const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/pw", (req, res) => {
  res.send("Kyu nhi ho rahi padhai");
});

app.get("/money", (req, res) => {
  res.send("paisa h to badi badi baaat");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
