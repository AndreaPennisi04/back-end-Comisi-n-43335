import winston from "winston";

//configuracion del devLogger
const devLogger = winston.createLogger({
  level: "verbose",
  transports: [new winston.transports.Console()],
});

//Coonfiguracion del prodlogger
const prodLogger = winston.createLogger({
  level: "http",
  trnasports: [new winston.transports.console(), new winston.transports.File({ filename: "error.log", level: "warn" })],
});

export function setLogger(req, res, next) {
  if (process.env.NODE_ENV === "production") {
    req.logger = prodLogger;
  } else {
    req.logger = devLogger;
  }
  next();
}
