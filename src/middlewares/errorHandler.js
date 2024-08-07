export default (error, req, res, next) => {
  let customError = {
    statusCode: error.statusCode || 500,
    msg: error.message || "Something went wrong, try again later",
  };

  if (error.name === "ValidationError") {
    customError.statusCode = 400;
    customError.msg = Object.values(error.errors)
      .map((val) => val.message)
      .join(", ");
  }

  if (
    error &&
    error.errorResponse &&
    error.errorResponse.code &&
    error.errorResponse.code === 11000
  ) {
    customError.statusCode = 409;
    customError.msg = `${Object.keys(
      error.keyValue
    )} already exists. Please choose another ${Object.keys(error.keyValue)}.`;
  }

  if (error.name === "CastError") {
    customError.statusCode = 404;
    customError.msg = `No item found with id: ${error.value}`;
  }
  return res.status(customError.statusCode).json({
    msg: customError.msg,
  });
};
