const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const db = require("./db");
const notesController = require("./controllers/notesController");
// const data = require("./data/all-costs.json");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Root is opened");
});

app.get("/costs", notesController.all);

// app.get("/costs/", async (req, res) => {
//   const allCosts = await notesController.all;
//   console.log(allCosts);

//   let { category } = req.query;
//   if (category) {
//     const filtered = dataFromFile.products.filter(el =>
//       el.categories.includes(category)
//     );
//     const state = filtered.length > 0 ? "success" : "no products";
//     return res.send({
//       state,
//       products: filtered
//     });
//   }

//   res.json(allCosts);
// });

// app.get("/costs/:id", async (req, res) => {
//   const dataFromFile = await getData();
//   const product = dataFromFile.products.find(
//     p => parseInt(p.id) === parseInt(req.params.id)
//   );
//   const status = product ? "success" : "no such product";

//   res.send({
//     status,
//     products: product
//   });
// });

app.get("/costs/:id", notesController.findById);

app.post("/costs", notesController.insert);

app.patch("/costs/:id", notesController.update);

app.delete("/costs/:id", notesController.delete);

async function getData() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, "data", "all-costs.json"),
      "utf-8",
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      }
    );
  });
}

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
