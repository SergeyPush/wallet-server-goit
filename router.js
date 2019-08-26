const express = require("express");
const app = express();
const productsRoutes = require("./src/products/productRoutes");
const usersRoutes = require("./src/users/userRoutes");
const ordersRoutes = require("./src/orders/orderRoutes");

app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/orders", ordersRoutes);

module.exports = app;
