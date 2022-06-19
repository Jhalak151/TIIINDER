const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("App is listening on port 8080!\n");
});

app.get("/", (req, res) => {
  res.send("Hello");
});