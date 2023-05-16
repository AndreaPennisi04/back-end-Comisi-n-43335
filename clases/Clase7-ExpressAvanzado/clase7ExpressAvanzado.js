import express from "express";
const app = express();

//EndPoint
const personas = [
  {
    id: 1,
    nombre: "Francisco",
    edad: 10,
  },
  {
    id: 2,
    nombre: "Mateo",
    edad: 2,
  },
];
/*Conforme incrementa el dinamismo en las urls, es importante configurar el servidor para que reciba datos complejos desde la url, por ello hay que utilizar la línea:
permitirá que el servidor pueda interpretar mejor los datos complejos que viajen desde la url, y mapearlos correctamente en el req.query
*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(req);
  res.send("hola mundo ");
});

app.get("/personas", (req, res) => {
  res.send(personas);
});

// El params crea la ruta dinamica es lo que va despues de/personas/(valor del paramns)
app.get("/personas/:id", (req, res) => {
  const { id } = req.params; //destructuring
  const persona = personas.find((persona) => persona.id == id);
  //   if (persona) res.send(persona); Se puede validar asi sin un return y con in else
  //   else res.sendStatus(404);
  if (persona) return res.send(persona); // O, se puede validar asi, con un return en el if y sin un else y da el mismo resultado
  res.status(404).json({ error: "Persona no encontrada" });
});

app.get("/search", (req, res) => {
  const { nombre } = req.query;
  const persona = personas.find((persona) => persona.nombre == nombre);
  if (persona) return res.send(persona);
  res.status(404).json({ error: "Ese nombre no existe" });
});

//Post(no me funciona)
app.post("/personas", (req, res) => {
  const { nombre, edad } = req.body;
  const id = personas.length + 1;
  const persona = { id, nombre, edad };
  personas.push(persona);
  res.status(201).json(persona);
});

//Put: es para modificar todo el recurso y el putch para modificar algo en concreto, un dato en concreto
app.put("/personas/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, edad } = req.body;
  const persona = personas.find((persona) => persona.id == id);
  if (persona) {
    persona.nombre = nombre;
    persona.edad = edad;
    return res.json(persona);
  }
  res.status(400).json({ error: "Persona no encontrada" });
});

//Delete
app.delete("/personas/:id", (req, res) => {
  const { id } = req.params;
  const persona = personas.find((persona) => persona.id == id);
  if (persona) {
    personas.splice(personas.indexOf(persona), 1);
    return res.sendStatus(204);
  }
  res.status(404).json({ error: "Persona no encontrada" });
});

app.listen(3030, () => console.log("Listening port 3030"));

//Extress avanzado
//CRUD: significa Create, Read, Update y Delete
/*La API permite entonces que se respondan preguntas como:
¿A qué endpoint debo apuntar para la tarea que necesito?
¿Qué método debo utilizar para ese recurso? Ej: Get, Put, Post, Delete
¿Qué información debo enviar para realizar correctamente mi petición?
La API es un intermediario
Las API son las rutas. Ejemplo: 
app.get("/search", (req, res) => {
  const { nombre } = req.query;
  const persona = personas.find((persona) => persona.nombre == nombre);
  if (persona) return res.send(persona);
  res.status(404).json({ error: "Ese nombre no existe" });
});*/

/* Cuando hacemos una peticion o recibimos una lista, tiene que esta en un formato que se 
llama REST (REpresentational State Transfer)*/
