//if kunai error aako chha bhanay middleware ko function ma sabai bhanda agade aayerea err bhannay parameter baschha.
//only if middleware lay error carry gareko chha bhanay
//code 500 hardcoded rakhnu is bad practice so use package

import HttpStatusCodes from "http-status-codes";
import NotFoundError from "../utils/NotFoundError";
import BadRequestError from "../utils/BadRequestError";
import UnauthorizedError from "../utils/UnauthorizedError";

export default function genericErrorHandler(err, req, res, next) {
  if (err.isJoi) {
    res.status(HttpStatusCodes.BAD_REQUEST).json({
      code: HttpStatusCodes.BAD_REQUEST,
      message: err.name,
      details: err.details.map((detail) => detail.message),
    });
  }

  if (err instanceof NotFoundError) {
    res.status(HttpStatusCodes.NOT_FOUND).json({
      code: HttpStatusCodes.NOT_FOUND,
      message: err.message,
    });
  }

  if (err instanceof BadRequestError) {
    res.status(HttpStatusCodes.BAD_REQUEST).json({
      code: HttpStatusCodes.BAD_REQUEST,
      message: err.message,
    });
  }

  if (err instanceof UnauthorizedError) {
    res.status(HttpStatusCodes.UNAUTHORIZED).json({
      code: HttpStatusCodes.UNAUTHORIZED,
      message: err.message,
    });
  }

  const errorMessage = err.message
    ? err.message
    : HttpStatusCodes.getStatusText(HttpStatusCodes.INTERNAL_SERVER_ERROR);

  if (err) {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
      //   code: 500,
      //   message: "Internal server error",
      code: HttpStatusCodes.INTERNAL_SERVER_ERROR,
      message: errorMessage,
    });
  }
}
