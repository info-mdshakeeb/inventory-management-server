const express = require('express');
const userRoute = require('./user.route');
const ProductRoute = require('./products.routes');
const routes = express.Router();

const allRoutes = [
  { path: '/users', route: userRoute },
  { path: '/products/', route: ProductRoute },
];

allRoutes.forEach((ru) => routes.use(ru.path, ru.route));

module.exports = routes;
