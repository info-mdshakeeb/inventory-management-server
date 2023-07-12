const express = require('express');
const userRoute = require('./user.route');
const routes = express.Router();

const allRoutes = [{ path: '/users', route: userRoute }];

allRoutes.forEach((ru) => routes.use(ru.path, ru.route));

module.exports = routes;
