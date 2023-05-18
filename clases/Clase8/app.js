/*¿Qué es un middleware?
 Cada vez que utilizamos un app.use estamos utilizando un middleware. Éstas son operaciones que se ejecutan de manera intermedia entre la petición del cliente, y el servicio de nuestro servidor. 
 Como lo indica el nombre: “middleware” hace referencia a un intermediario, siempre se ejecuta antes de llegar al endpoint que corresponde. 
Podemos utilizar un middleware para:

Dar información sobre las consultas que se están haciendo (logs)
Autorizar o rechazar usuarios antes de que lleguen al endpoint (seguridad)
Agregar o alterar información al método req antes de que llegue al endpoint (formato)
Redireccionar según sea necesario (router)
En ciertos casos, finalizar la petición sin que llegue al endpoint (seguridad)
IMPORTANTE: Los middleware se ejecutan en orden, eso quiere decir que, si algún middleware depende de que se haya realizado otra operación ejecutada por un middleware previo, los coloquemos en cascada según prioridad. 


Tipos de middleware:
Middleware a nivel de aplicación
Middleware a nivel endpoint
Middleware a nivel del Router
Middleware de manejo de errores
Middleware incorporado
Middleware de terceros
*/

//Ejemplo de middleware sin ninguna via de acceso de montaje
const app = express();

app.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});

//Ejemplo de Middleware de nivel del router: es igual que a nivel de aplicacion excepto que esta enlazaco con la instancia de express.Router()
const app1 = express();
const router = express.Router();

// funcion middleware sin via de acceso de montaje.
// El codigo es ejecutado por cada peticion al router
router.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});

// Middleware de manejo de errores: ésta lleva 4 argumentos (err, req, res, next)
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//Middleware incorporado: express.static() es responsable del servicios de archivos estaticos
app.use(express.static("public", options));
//Public (como nombre de ejemplo): especifica el directorio raiz desde el que se realiza el servicio de activos estaticos
//Options(options como objeto y como nombre de ejemplo): puede tener las siguientes propiedades: dotfiles, etag, extensions, index, lasModified, maxAge, redirect, setHeaders

//Middleware de terceros
/*Podemos instalar y utilizar middlewares de terceros para añadir funcionalidad a nuestra aplicación. El uso puede ser a nivel de aplicación o a nivel de Router. 
Por ejemplo, instalamos y usamos la función de middleware de análisis de cookies cookie-parser. 
$ npm install cookie-parser*/

var express = require("express");
var app2 = express();
var cookieParser = require("cookie-parser");

// load the cookie-parsing middleware
app2.use(cookieParser());

//Middleware de carga de archivos: MULTER
/*Multer
Multer es un middleware de terceros, pensado para poder realizar carga de archivos al servidor. 

En ocasiones el cliente necesitará subir una imagen, un vídeo o un archivo, según sea nuestra aplicación, ello nos lleva a configurar 
nuestro servidor para soportar estos archivos y poder almacenarlos en donde nosotros le indiquemos.
Una vez que tenemos MULTER instalado, podemos importarlo en nuestro proyecto y configurarlo donde lo necesitemos (puede ser directamente en app, 
o bien se recomienda hacerlo en un archivo al mismo nivel de app llamado “utils”)*/
import multer from "multer";
//antes de instanciar multer, debems configurar donde se almacenaran los archivos
const storage = multer.diskStorage({
  // destinacion hara refrencia a la carpeta donde se va a guardar el archico
  destination: function (req, file, cd) {
    ChatBubble(null, __dirname + "/public/img"); //Especificamos la carpeta en este punto
  },
  //filename hara referencia al nombre final que tendra el archivo
  filename: function (req, file, cb) {
    cd(null, file.originalname); //originalname indica que se conserve el nombre inicial
  },
});

export const uploader = multer({ storage });

//Utilizar uploader
/*Una vez que nuestro uploader está listo para utilizarse, podemos importarlo en el router que necesitemos y colocarlo en la ruta donde lo necesitemos, 
recuerda que, al ser un middleware, éste va enmedio de la ruta y de la función callback (req,res).
Podemos utilizar el uploader de dos formas principalmente:

uploader.single(‘nombre del campo’): permitirá subir un único archivo, su resultado estará en req.file
uploader.array(‘nombre de campos’): permitirá subir múltiples archivos, su resultado estará en req.files

Ejemplo: router.post("/", uploader.single("file"), (req, res) => {});

Asi queda la estructura entera: */
import { Router } from "express";
import { uploader } from "../utils.js"; // importamos el uploader previamente configurando
const router1 = Router();

let users = [];
router.get("/", (req, res) => {
  res.send({ status: "success", payload: users });
});

router.post("/", uploader.single("file"), (req, res) => {
  if (!req.file) {
    //si no existe req.file, es que hubo un error al subir el archivo
    //es uno quien tiene que elegir si deesa continuar con el proceso o no
    return res.status(400).send({ status: "Error", error: "no se puede guardar la imagen" });
  }
  console.log(req.file); //Revisar los campos que vienen en req.file por parte de multer
  //el resto del cuerpo del usuario a agregar vivira en req.body, como es usual
  let user = req.bodu;
  user.profile = req.file.path;
  users.push(user);
  res.send({ status: "success", message: "User crated" });
});
export default router;

/*Cuando subimos un archivo (imagen, vídeo, etc), estamos hablando de un flujo de datos. lo cual no puede plasmarse en un JSON. 
Cuando enviamos información a un endpoint donde sabemos que utilizamos MULTER, debemos enviarlo como FormData, no como JSON.*/
