const notFoundRoutes = (req, res, next) => {
  const error = new Error(`not Found ${req.originalUrl}`);
  res.status(404);
  next(error);
};
module.exports = notFoundRoutes;
