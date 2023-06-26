//Estos son alias
const express = require("express");
const mongoose = require("mongoose"); // es una libreria q nos permite conectar con mongo DB
//import displayRoutes from "express-routemap";
const displayRoutes = require("express-routemap");
const usersRoutes = require("./routes/user.routes");
const notesRoutes = require("./routes/notes.routes");

const app = express();

const PORT = 5000;
const DB_HOST = "localhost";
const DB_PORT = 27017; // esto es lo que hace que se conecte con Mongo compass. es el numeron de ppuerto de conexion.
const DB_NAME = "mongoAvanzadoP1";

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`; //esto es el string de conexion q en local tiene esta forma

console.log("🚀 ~ file: app.js:16 ~ MONGO_URL:", MONGO_URL); // este log es para poder ver en la terminal cuando se conecta
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }) // Es una promesa(connect)que trabaja con un string connextion que seria (MONGO_URL). Si nos paramos arriba de connect, vamos a ver que dice: fucntion connect(uri: string, options?; mongoose.ConnectOptions | undefined): Promise<typeof mongoose>(+2 overloads).
  //Nosotros sabemos que una promesa tiene dos estados: reject y resulve. RESOLVED es cuando la promesa se resuelve de forma exitosa y  REJECT:cuando se resulve de forma fallida. Pero tambien existe un tercer estado que se llama PENDIN: que es cuando estamos esperando qwue la promesa se ejecute. La propia promesa aqui es esta parte: "mongoose.connect(MONGO_URL).
  //En este caso pq no se utiliza un async await? pq no tenemos una funcion y solo se usa en funciones por eso usamos en remplazo un then y catch
  .then((conn) => {
    console.log("🚀 ~ file: app.js:18 ~ CONECTADO!:");
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js:20 ~ err:", err);
  });

app.use("/api/users/", usersRoutes);
app.use("/api/notes/", notesRoutes);

app.listen(PORT, () => {
  displayRoutes(app);
  console.log(`Listening on ${PORT}`);
});

/*NOTAS:
En el ejemplo de la linea 24 (nongo_url) tambien se puede declarar un options con un parse y unified seteandolo de esta manera: .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }) Estas son opciones para hacer le parse automatico de la URL(useNewUrlParser) y (useUnifiedTopology) en la forma que funcionan los nodos de mongo */
