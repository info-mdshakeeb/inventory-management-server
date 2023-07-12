const dotenv = require('dotenv');
const path = require('path');

//location
dotenv.config({ path: path.join(process.cwd(), '.env') });

module.exports = {
  port: process.env.PORT,
  mongoUrl: process.env.MongooseUrl,
};
