const ApiErrors = require('../errors/ApiErrors');
const ValidationError = require('../errors/ValidationError');

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
  } else if (error.name === 'ValidationError') {
    const simplifyError = ValidationError(error);
    statusCode = simplifyError.statusCode;
    message = simplifyError.message;
    errorMessages = simplifyError.errorMessages;
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
