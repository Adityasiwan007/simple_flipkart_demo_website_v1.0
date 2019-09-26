var express = require("express");
var app = express();
var mongoose = require("mongoose");
var winston = require("winston");
let Product = require("./models/product_structure.js");
var ObjectId = mongoose.Types.ObjectId;
var bodyParser = require("body-parser");

app.get("/products", async (req, res, next) => {
  console.log("This is product json");
  let prox = await Product.find();
  console.log(`number of products loaded ${prox.length}`);
  res.send(prox);
});

app.get("/igdg", async (req, res, next) => {
  let pro_time = "Aditya Sinha";
  res.send(pro_time);
});

app.get("/return/:data", async (req, res, next) => {
  let { data } = req.params;
  let pro = `This is return valute to server: ` + data;
  res.send(pro);
});
app.use("/", express.static(__dirname + "/"));

app.listen(3001);

//coneect to database

mongoose.connect(
  "mongodb://localhost:27017/rq",
  { server: { reconnectTries: Number.MAX_VALUE } },
  function(err) {
    if (err) {
      console.log("info", "Couldnt connect to MongoDB:", err);
    } else {
      console.log("info", "Connected to MongoDB");
    }
  }
);
