
const express = require("express");
const mysql = require("mysql2");

const app = express();

// DB connection
const db = mysql.createConnection({
  host: "db",        // IMPORTANT: service name use karna hai
  user: "root",
  password: "root",
  database: "mydb"
});

db.connect(err => {
  if (err) {
    console.log("DB connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// API
app.get("/", (req, res) => {
  db.query("SELECT NOW() as time", (err, result) => {
    if (err) {
      return res.send("DB error");
    }
    res.send("DB Time: " + result[0].time);
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
