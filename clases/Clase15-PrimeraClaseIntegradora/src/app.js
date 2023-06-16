const express = require("express");
const cors = require("cors");
const displayRoutes = require("express-routemap");
const handlebars = require("express-handlebars");
const { NODE_ENV, PORT, API_VERSION, CURSO } = require("./config/config");
const { mongoDBConnection } = require("./db/mongo.config");

class App {
  app;
  env;
  port;
  server;

  constructor(routes) {
    this.app = express();
    this.env = NODE_ENV || "development";
    this.port = PORT || 8000;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.connectDB();
    this.initHandlebars();
  }

  getServer() {
    return this.app;
  }

  closeServer(done) {
    this.server = this.app.listen(this.port, () => {
      done(); // esto es pq necesito hacer un callback o una funcion por eso primero se pasa como aparametro
    });
  }

  async connectDB() {
    await mongoDBConnection();
  }

  initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json()); //Esto nos permite que cuando ahagamos el res.body dentro de una solicitud en express podamos acceder al body que viene dentro de la peticion y que se lea la informacion en formato json
    this.app.use(express.urlencoded({ extended: true })); //esto es para que procese cualquier tipo,  por ejemplo un formulario , en el res.body
    this.app.use("/static", express.static(`${__dirname}/public`));
  }

  initializeRoutes(routes) {
    routes.forEach((route) => {
      this.app.use(`/api/${API_VERSION}`, route.router);
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      displayRoutes(this.app);
      console.log(`=================================`);
      console.log(`======= COURSE: ${CURSO} ======`);
      console.log(`======= ENV: ${this.env} =======`);
      console.log(`🚀 App listening on the port ${this.port}`);
      console.log(`=================================`);
    });
  }

  initHandlebars() {
    this.app.engine("handlebars", handlebars.engine());
    this.app.set("views", __dirname + "/views");
    this.app.set("view engine", "handlebars");
  }
}

module.exports = App; // con esto puedo exportar app fuera en otros archivos
