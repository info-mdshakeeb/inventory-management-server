class ApiErrors extends Error {
  status;
  constructor(status, message, stack = '') {
    super(message);
    this.status = status;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
module.exports = ApiErrors;
