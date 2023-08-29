import express from "express";
import displayRoutes from "express-routemap";

import os from "os";
import cluster from "cluster";

const app = express();

const PORT_APP = 5000;

console.log("🚀 ~ file: app.js:13 ~ cluster.isPrimary:", cluster.isPrimary);
if (cluster.isPrimary) {
  const numWorkers = os.cpus().length; // este es el proceso padre que instancia los workers necesarios donde crea workers hijos
  console.log("🚀 ~ file: app.js:17 ~ numWorkers:", numWorkers);

  // TODO: Creando workers o subprocesos
  for (let i = 0; i < numWorkers; i++) {
    cluster.fork(); // esto crea subprocesos hijos. Como se comunican los procesos hijos de los procesos padres? lo hace como lo hace sockets, a traves de metodos como metodo/evento: on, in, etc. En la linea 21 utilizamos el metodo on.
  }

  cluster.on("exit", (worker, code, signal) => {
    // aca funciona igualito a socket
    // ente evento on permite hacer un call back
    console.log(`****CREATE NEW Worker ${worker.process.pid} died with code ${code} and signal ${signal}****`);
    console.log("Creating a new worker");
    cluster.fork();
  });
} else {
  app.get("/", (req, res) => {
    return res.send({ worker: ` el worker con id ${process.pid}` });
  });

  app.get("/endpoint", (req, res) => {
    let total = 0;
    for (let index = 0; index < 1000; index++) {
      total += index;
    }

    res.send({
      status: "success",
      message: ` el worker con id ${process.pid} ha atendido la peticion y retorna el valor total ${total}`,
    });
  });

  app.get("/complejo", (req, res) => {
    let total = 0;
    for (let index = 0; index < 5e2; index++) {
      total += index;
    }

    res.send({
      status: "success",
      message: ` el worker con id ${process.pid} ha atendido la peticion y retorna el valor total ${total}`,
    });
  });

  app.listen(PORT_APP, () => {
    displayRoutes(app);
    console.log(`Listening on ${PORT_APP}, enviroment: ${process.env.NODE_ENV}, ***** ACTUALIZANDO ***`);
  });
}
