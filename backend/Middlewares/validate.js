const Joi = require("joi");
const httpStatus = require("http-status");
const ApiError = require("../Util/ApiError");


const validate = (schema) => (req, res, next) => {
  if (Object.keys(req.body).length !== 0 && !req.is("application/json")) {
    return next(
      new ApiError(
        httpStatus.UNSUPPORTED_MEDIA_TYPE,
        "Supports JSON request body only"
      )
    );
  }

  const { error } = schema.validate(req.body);
  if (error) {
    const errors = error.details.map((detail) => detail.message).join(", ");
    return next(
      new ApiError(httpStatus.BAD_REQUEST, `${errors}`)
    );
  }

  return next();
};

module.exports = validate;

