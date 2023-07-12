const { generateUserId } = require('../helper/customId');
const Product = require('../model/product.modal');

module.exports.createUser = async (product) => {
  const id = await generateUserId();
  product.id = id;
  const result = await Product.create(product);
  return result;
};
