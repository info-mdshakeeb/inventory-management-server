const express = require('express');
const cors = require('cors');
const noRouteFound = require('./middleware/noRouteFound');
const globalErrorHandler = require('./middleware/globalErrorHandler');
const routes = require('./routes/routes.all');

//making app :
const app = express();
app.use(express.json());
app.use(cors());

//test server
app.get('/', (req, res) => {
  res.send('server is running');
});

//route
app.use('/api/v1/', routes);

// error handler middleware
app.use(globalErrorHandler);
app.use(noRouteFound);

module.exports = app;
