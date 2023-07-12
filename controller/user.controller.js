const catchAsync = require('../utils/catchAsync');
const sandResponse = require('../utils/sandResponse');

module.exports.getUsers = catchAsync(async (req, res) => {
  sandResponse(res, {
    success: true,
    statusCode: 200,
    message: 'data get successfully',
    data: {
      id: '1',
      name: 'shakeeb',
    },
  });
});
