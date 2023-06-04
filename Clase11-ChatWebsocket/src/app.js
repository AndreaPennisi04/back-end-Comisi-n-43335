import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-hanblebars";
import viewsRouter from "./routes/views.router.js";
import { Server } from "socket.io"; // este servidor es propio de websocket

const app = express();
//const handlebars = require("express-handlebars");
const server = app.listen(8080, () => console.log("Listening on PORT 8080"));

const io = new Server(server); // io sera un servidor para trabajar con sockets.

//configuracion de plantillas
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public")); //public es importante para tener archivos js y css en plantillas
app.use("/", viewsRouter);

let messages = [];
io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado");

  socket.on("message", (data) => {
    messages.push(data);
    io.emit("messageLogs", messages);
  });
});
