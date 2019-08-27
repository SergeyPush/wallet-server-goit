// const fs = require("fs");
// const path = require("path");
// const db = require("./db");

const express = require("express");
const app = express();
const morgan = require("morgan");
const router = require("./router");
const config = require("config");
const mongoose = require("mongoose");
// const notesController = require("./controllers/notesController");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(router);

app.get("/", (req, res) => {
  res.send("Root is opened");
});

app.use(function(req, res, next) {
  let err = new Error("not found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).send({ message: err.message, error: err });
});

mongoose
  .connect(config.get("dev.db"), { useNewUrlParser: true })
  .then(console.log("Connected to mongo DB"))
  .catch(err => console.error("Cannot connect to Mongo DB", err));

const PORT = config.get("dev.port") || 3000;

app.listen(PORT, function() {
  console.log(`Server is running on port: ${PORT}`);
});
