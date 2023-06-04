import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./router/views.router.js";

const app = express();
// const app = [];
app.use(express.static(`${__dirname}/public`)); //setear de manera statica la carpeta public
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine()); // Esta crea el motor de handlebars
// con app.set("views", ruta)indicamos en que parte del proyecto estan las vistas
//utilizar rutas absolutas para evitaruntos ruteo relativo
app.set("views", ` ${__dirname}/views`); // Apunta a las rutas de views
app.set("view engine", "handlebars"); // Lee las vistas

app.use("/", viewsRouter);

const server = app.listen(8080, () => console.log("Listening on PORT 8080"));
