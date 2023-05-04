// import http from "http";
// const server = http.createServer((request, response) => {
//   response.end("Hola mundo en Back-End");
// });
// server.listen(8080, () => {
//   console.log("Listening from port 8080");
// });

//Req.params
import { express } from "express";
const app = express();
app.get("/unparametro/ :nombre", (req, res) => {
  console.log(req.params.nombre);
  res.send(`Bienvenid@, ${req.params.nombre}`);
});
app.get("/dosparametro/ :nombre/ :apellido", (req, res) => {
  res.send(`El nombre completo es:  ${req.params.nombre} ${req.params.apellido}`);
});
app.listen(8080, () => {
  console.log("Listo para pedir peticiones!");
});

/*req.query: Como su nombre lo indica, query refiere a las múltiples consultas que se pueden hacer a un determinado endpoint, 
basta conque en la url coloquemos el símbolo ? , entonces express reconocerá que hay que meter información al objeto 
req.query para poder utilizarlo en el endpoint.
Cuando buscamos algo en nuestro navegador, llamamos a un endpoint haciendo un determinado query.
*/

const app2 = express();
app.get("/ejemploQuerys", (req, res) => {
  let consulta = req.queary;
  let { nombre, apellido, edad } = req.queary;
  res.sed(consulta);
});
app.listen(8080, () => {
  console.log("Listo para probar querys!");
});

//Ejemplo: implementando endpoint que utiliza req.query
const app3 = express();
app.use(express.urlencoded({ extended: true }));

const usuarios = [
  {
    id: "1",
    nombre: "Andrea",
    apellido: "Pennisi",
    edad: "41",
    email: "andreapennisi@ejemplo.com",
  },
  {
    id: "2",
    nombre: "Mateo",
    apellido: "Diquattro",
    edad: "20 mths",
    email: "",
  },
  {
    id: "3",
    nombre: "Pancho",
    apellido: "Diquattro",
    edad: "10",
    email: "franciscodiquattro@ejemplo.com.ar",
  },
  {
    id: "4",
    nombre: "Diego",
    apellido: "Diquattro",
    edad: "42",
    email: "diegodiquattro@ejemplo.com.ar",
  },
];
app.get("/", (req, res) => {
  let email = req.query.apellido;
  if (!email || email !== ".ar" || email !== ".com") return res.send({ usuarios });
  let usuariosFiltrados = usuarios.filter((usuario = usuarios.email === email));
  res.send({ usuarios: usuariosFiltrados });
});

app.listen(8080, () => {
  console.log("Preparados para ser filtrados");
});
/*¿Qué diferencia hay con params?
La principal diferencia que hay entre req.params y req.query, es que en req.query 
puedo meter la cantidad de consultas que yo así desee, ya que las queries no vienen inmersas en la ruta, sino que son un elemento aparte.
Así, si desconozco el número de cosas que se van a consultar en mi ruta, la mejor opción es utilizar queries, mientras que, 
si sólo necesito un número específico y reducido de parámetros, habría que optar por params
Al final, no hay una mejor que otra, sirven para casos diferentes e incluso podemos utilizar ambas en la misma consulta.
*/
