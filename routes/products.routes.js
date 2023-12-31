const express = require('express');
const productController = require('../controller/Product.controller');
const route = express.Router();

route.get('/', productController.getProducts);
route.post('/add-product', productController.addProduct);

module.exports = route;