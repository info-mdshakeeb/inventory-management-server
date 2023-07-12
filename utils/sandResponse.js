const sandResponse = (res, data) => {
  const resData = {
    statusCode: data.statusCode || 500,
    success: data.success,
    message: data.message,
    meta: data.meta,
    data: data.data,
  };
  res.status(data.statusCode).json(resData);
};
module.exports = sandResponse;
