import express from "express";
import { Server } from "socket.io";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import __dirname from "./utils.js";

//aplicativo express
const app = express();

//Archivos estaticos
app.use(express.static(`${__dirname}/public`));

//Motores de plantillas
app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use("/", viewsRouter);

//Declaramos una constante para levantar el servidor y poder luego pasarla como parametro
const server = app.listen(8081, () => console.log("Server running"));

//Declaramos una constante para io que es par usar Websocket
const io = new Server(server);

// io.on("connection", (socket) => {
//   console.log("Nuevo cliente conectado");

//   io.on("connection", (socket) => {
//     console.log("Nuevo cliente conectado");

//     socket.on("message", (data) => {
//       console.log(data);
//     });

//     socket.emit("evento_socket_individual", "este mensaje solo lo recibe el socket");

//     socket.broadcast.emit("evento_todos_menos_actual", "Lo van a ver todos los clientes menos el actual");

//     io.emit("evento_todos", "Lo recibirán todos los clientes");
//   });
// });

io.on("connection", (socket) => {
  console.log("Conectado");
  socket.on("message1", (data) => {
    io.emit("log", data);
  });
});
//notes: Websocket lo que hace es tener dos endpoints de comunicacion, es decir desde el ususario y desde el cliente. Cada endpoint
//A cada endpoit que le vamos a establer, se los va a llamar como socket y va a dar una comunicacion bidireccional entre el cliente y el servidor
