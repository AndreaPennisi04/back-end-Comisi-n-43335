import express from "express";
import cookieParser from "cookie-parser";
import displayRoutes from "express-routemap";
import userRoutes from "./routes/user.routes.js";
//import handleErrorMdw from "./middleware/error/index.js";

const app = express();

const PORT_APP = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users/", userRoutes);
app.use(async (err, req, res, next) => {
  console.log(`COLOCAR AQUI MDW GLOBAL DE ERRORES!!!`);
});

app.listen(PORT_APP, () => {
  displayRoutes(app);
  console.log(`Listening on ${PORT_APP}`);
});
