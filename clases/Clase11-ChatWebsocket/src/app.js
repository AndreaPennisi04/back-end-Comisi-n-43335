import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-hanblebars";
import viewsRouter from "./routes/views.router.js";
import { Server } from "socket.io"; // este servidor es propio de websocket

const app = express();

//configuracion de plantillas
app.use(express.static(__dirname + "/public")); //public es importante para tener archivos js y css en plantillas

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use("/", viewsRouter);

//const handlebars = require("express-handlebars");
const server = app.listen(8081, () => console.log("Listening on PORT 8081"));

const io = new Server(server); // io sera un servidor para trabajar con sockets.
const messages = [];

io.on("connection", (socket) => {
  //Esto es para los nuevos ususarios
  console.log("Nuevo cliente conectado");

  socket.on("message", (data) => {
    messages.push(data);
    io.emit("messageLogs", messages); // emit es para uno solo para quien se esta conectando
  });

  socket.on("authenticated", (data) => {
    //Esto es para decirle a todos los usuarion que alguien esta conectado
    socket.emit("messageLogs", messages);
    socket.broadcast.emit("newUserConnected", data);
  });
});
