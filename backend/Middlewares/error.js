const httpStatus = require("http-status");
const config = require("../config/config");

const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    let message = err.message || "Internal Server Error";

    res.locals.errorMessage = message;

    if (config.env === 'development') {
        console.error(err);
    } else {
        console.log(message);
    }

    res.status(statusCode).json({
        code: statusCode,
        message: message,
    });
};

module.exports = {
    errorHandler,
};