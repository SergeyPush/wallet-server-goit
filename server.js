const express = require("express");
const app = express();
const data = require("./data/all-costs.json");

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Root is opened");
});

app.get("/costs/", (req, res) => {
  let { category } = req.query;
  if (category) {
    const filtered = data.products.filter(el =>
      el.categories.includes(category)
    );
    const state = filtered.length > 0 ? "success" : "no products";
    return res.send({
      state,
      products: filtered
    });
  }

  res.send(data);
});

app.get("/costs/:id", (req, res) => {
  const product = data.products.find(
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
