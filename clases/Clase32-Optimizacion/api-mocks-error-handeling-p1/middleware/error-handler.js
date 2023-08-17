import { StatusCodes } from "http-status-codes"; // esto es una libreria que tiene todos los cod de estados de error StatusCodes

export const EnumErrors = {
  ROUTING_ERROR: `ROUTING ERROR`,
  INVALID_TYPES_ERROR: `INVALID TYPES ERROR`,
  CONTROLLER_ERROR: `CONTROLLER ERROR`,
  DATABASE_ERROR: `DB ERROR`,
  INVALID_PARAMS: `INVALID PARAMS ERROR`,
};

export class HttpResponse {
  // esta clase tiene un constructor vacio por eso no se coloca

  OK(res, message, data) {
    return res.status(StatusCodes.OK).json({
      // Ok remplaza al estatus 200
      status: StatusCodes.OK,
      statusMessage: message,
      data,
    });
  }

  NotFound(res, message, data) {
    return res.status(StatusCodes.NOT_FOUND).json({
      //NOT_FOUND esto es 404
      status: StatusCodes.NOT_FOUND,
      statusMessage: message,
      data,
    });
  }

  Unauthorized(res, message, data) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      //UNAUTHORIZED este es un 401
      status: StatusCodes.UNAUTHORIZED,
      statusMessage: message,
      data,
    });
  }

  Forbbiden(res, message, data) {
    return res.status(StatusCodes.FORBIDDEN).json({
      // FORBIDDEN 403
      status: StatusCodes.FORBIDDEN,
      statusMessage: message,
      data,
    });
  }

  BadRequest(res, message, data) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      // status 400 BAD_REQUEST
      status: StatusCodes.BAD_REQUEST,
      statusMessage: message,
      data,
    });
  }

  Error(res, message, data) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      // INTERNAL_SERVER_ERROR estatus 500
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: message,
      data,
    });
  }
}
