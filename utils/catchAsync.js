const ExpressError = require("./ExpressError");
module.exports = (func) => {
  return function (req, res, next) {
    func(req, res, next).catch((err) =>
      next(new ExpressError(err.message, 404))
    );
  };
};
