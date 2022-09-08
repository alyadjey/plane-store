const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const url = process.env.URL;

app.use(express.json()); //для парсинга application/json
app.use(express.urlencoded({ extended: true })); //для парсинга application/x-www-form-urlencoded
app.use("/static", express.static(__dirname + "/assets")); //путь к папке с картинками
app.use("/api/planes", require("./routes/planes"));

mongoose.connect(url).then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
