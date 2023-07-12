const userServices = require('../services/product.service');
const catchAsync = require('../utils/catchAsync');
const sandResponse = require('../utils/sandResponse');

module.exports.addProduct = catchAsync(async (req, res) => {
  const data = await userServices.createUser(req.body);
  sandResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Product create successfully',
    data: data,
  });
});
