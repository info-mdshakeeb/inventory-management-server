const { generateUserId } = require('../helper/customId');
const Product = require('../model/product.modal');

module.exports.createUser = async (product) => {
  const id = await generateUserId();
  product.id = id;
  if (product.quantity === 0) {
    product.status = 'out-of-stock';
  }
  const result = await Product.create(product);
  if (!result) throw new Error('product is not created');
  return result;
};

module.exports.getUsers = async () => {
  const result = Product.find({});
  return result;
};
