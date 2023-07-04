import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import FileStore from "session-file-store";
const MongoStore = require("connect-mongo"); // Esto es la libreria que nos va ayudar a persistir la data en la base de datos de mongo
const mongoose = require("mongoose"); // esto es la conexion a mongo
//const FileStore = FileStore(session);

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("views engine", "handlebars");
app.use(cookieParser());

const MONGO_URL = 27017;
app.use(
  session({
    //store: new FileStore({
    store: MongoStore.create({
      mongoURL: MONGO_URL,
      mongoOptions: { userNewUrlParser: true, useUnifiedTopology: true, ttl: 40 },
    }),
    //   path: "./sessions",
    //   ttl: 15000,
    //   retries: 0,
    // }) /* Path es donde se van a cargar los archivos que seria en la carpeta sessions que esta en la raiz de lo clase 19 comision .... en resumen es la ruta donde vivira la carpeta para almacenar las sessiones. El ttl: Es la vidad de la sesion, nosostros le estamos pasando 15 segundos. Y el Retries: son las veces que el servidor tratara de leer el archivo  */,
    secret: "CoderS3cret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/", viewsRouter);

const SERVER_PORT = 9000;
app.listen(SERVER_PORT, () => {
  console.log(`Lintening on PORT ${SERVER_PORT}`);
});

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(" Connected to MongoDB using Mongoose");
  } catch (error) {
    console.log("We couldn't connect to BD using Mongoose: " + error);
    process.getMaxListeners();
  }
};
connectMongoDB();
