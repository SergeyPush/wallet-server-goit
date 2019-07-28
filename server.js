const express = require("express");
const app = express();
const data = require("./data/all-costs.json");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Root is opened");
});

app.get("/costs", (req, res) => {
  const { category } = req.query;

  if (category) {
    const arrOfProducts = [];
    data.products.forEach(el => {
      if (el.categories.includes(category)) arrOfProducts.push(el);
    });
    return res.send(arrOfProducts);
  }

  res.send(data.products);
});

app.get("/costs/:id", (req, res) => {
  const product = data.products.find(
    p => parseInt(p.id) === parseInt(req.params.id)
  );
  res.send(product);
});

app.use(express.json());

app.use(function(req, res, next) {
  let err = new Error("not found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send("error", { message: err.message, error: err });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
