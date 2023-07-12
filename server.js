const mongoose = require('mongoose');
const { mongoUrl, port } = require('./utils/config.Env');
const app = require('./app');

mongoose
  .connect(mongoUrl)
  .then(() => console.log('database connected successfully'));
app.listen(port, console.log(`port connected ${port}`));
