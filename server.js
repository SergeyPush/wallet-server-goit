const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const db = require("./db");
const notesController = require("./controllers/notesController");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Root is opened");
});

app.get("/costs", notesController.all);

app.get("/costs/:id", notesController.findById);

app.post("/costs", notesController.insert);

app.patch("/costs/:id", notesController.update);

app.delete("/costs/:id", notesController.delete);

app.use(function(req, res, next) {
  let err = new Error("not found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).send({ message: err.message, error: err });
});

const connectString =
  "mongodb+srv://spushkovskiy:mdb12345678@devconnector-insxj.mongodb.net";

db.connect(connectString, function(err) {
  if (err) {
    return console.log(err);
  }
  app.listen(PORT, function() {
    console.log(`Server is running on port: ${PORT}`);
  });
});
