import express from "express";

const app = express();

app.get("/saludo", (req, res) => {
  res.express("Hola a todos desde Express");
});

app.listen(8080, () => {
  console.log("Servidor arriba en puerto 8080");
});

//req params
import { express } from "express";

const app1 = express();

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
    email: "franciscodiquattro@ejemplo.com",
  },
  {
    id: "4",
    nombre: "Diego",
    apellido: "Diquattro",
    edad: "42",
    email: "diegodiquattro@ejemplo.com",
  },
];
app.get("/", (req, res) => {
  res.send({ usuarios });
});

app.get("/:idUsuarios"),
  (res, req) => {
    let idUsuarios = req.params.idUsuarios;
    let usuario = usuarios.find((u) => u.id === idUsuarios);
    if (!usuario) return res.send({ error: "Usuario no encontrado" }); //validacion
    res.sed({ usuario });
  };
app1.listen(8080, () => {
  console.log("Servidor arriba en puerto 8080");
});
