import express from "express";
import cookieParser from "cookie-parser";
import displayRoutes from "express-routemap";
import cors from "cors";
import { connect } from "mongoose";
//import { PORT } from "./config/config.js";

import userRoutes from "./routes/users.routes.js";
import bussinesRoutes from "./routes/bussiness.routes.js";
import ordersRoutes from "./routes/orders.routes.js";

const app = express();

const PORT_APP = process.env.PORT || 6050;
const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "layerArchitectureDBHandsLab";

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

connect(MONGO_URL)
  .then((conn) => {
    console.log("🚀 ~ file: app.js:33 ~ .then ~ conn:", conn);
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js:36 ~ err:", err);
  });

//Creacion de Rutas
app.use("/appi/users", userRoutes);
app.use("/appi/bussiness", bussinesRoutes);
app.use("/api/orders", ordersRoutes);

app.listen(PORT_APP, () => {
  displayRoutes(app);
  console.log(`Listening on ${PORT_APP}`);
});
