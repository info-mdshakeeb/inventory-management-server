const noRouteFound = (req, res) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: 'Internal server Error',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api not Found :(',
      },
    ],
  });
};
module.exports = noRouteFound;
