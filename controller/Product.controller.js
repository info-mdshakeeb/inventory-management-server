const ApiErrors = require('../errors/ApiErrors');
const productServices = require('../services/product.service');
const catchAsync = require('../utils/catchAsync');
const sandResponse = require('../utils/sandResponse');

module.exports.addProduct = catchAsync(async (req, res) => {
    const data = await productServices.createProduct(req.body);
    sandResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Product create successfully',
        data: data,
    });
});

module.exports.getProducts = catchAsync(async (req, res) => {
    const data = await productServices.getProducts(req.body);
    if (!data.length) {
        throw new ApiErrors(404, 'product not found');
    }
    sandResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Product get successfully',
        data: data,
    });
});
