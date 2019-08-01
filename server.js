const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
// const data = require("./data/all-costs.json");

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Root is opened");
});

app.get("/costs/", async (req, res) => {
  const dataFromFile = await getData();

  let { category } = req.query;
  if (category) {
    const filtered = dataFromFile.products.filter(el =>
      el.categories.includes(category)
    );
    const state = filtered.length > 0 ? "success" : "no products";
    return res.send({
      state,
      products: filtered
    });
  }

  res.send(dataFromFile);
});

app.get("/costs/:id", async (req, res) => {
  const dataFromFile = await getData();
  const product = dataFromFile.products.find(
    p => parseInt(p.id) === parseInt(req.params.id)
  );
  const status = product ? "success" : "no such product";

  res.send({
    status,
    products: product
  });
});

app.post("/costs", (req, res) => {
  res.send(req.body);
});

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

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
