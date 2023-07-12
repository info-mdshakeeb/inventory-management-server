const ApiErrors = require('../errors/ApiErrors');

// eslint-disable-next-line no-unused-vars
const globalErrorHandler = (error, req, res, next) => {
  let status = 500;
  let message = 'something is not right';
  let errorMessages = [];

  if (error instanceof ApiErrors) {
    (status = error.status),
      message,
      (errorMessages = error?.message
        ? [
            {
              path: req.originalUrl,
              message: error.message,
            },
          ]
        : []);
  } else if (error instanceof Error) {
    status,
      message,
      (errorMessages = error?.message
        ? [
            {
              path: req.originalUrl,
              message: error.message,
            },
          ]
        : []);
  }

  res.status(status).json({
    success: false,
    statusCode: status,
    message,
    errorMessages,
  });
};
module.exports = globalErrorHandler;
