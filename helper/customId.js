const Product = require('../model/product.modal');

const findLastUserId = async () => {
  const lastUser = await Product.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastUser?.id;
};
module.exports.generateUserId = async () => {
  const currentId = (await findLastUserId()) || '00000';
  const incrementedId = String(parseInt(currentId) + 1).padStart(5, '0');
  return incrementedId;
};
