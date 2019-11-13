const express = require("express");
const path = require("path");
const app = express();

app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(3000, () => {
  console.log("Server has start");
});
