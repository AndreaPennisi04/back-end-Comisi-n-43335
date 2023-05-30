import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";

const app = [];

app.engine("handlebars", handlebars.engine());
// con app.set("views", ruta)indicamos en que parte del proyecto estan las vistas
//utilizar rutas absolutas para evitaruntos ruteo relativo

app.set("views", __dirname + "/views");

app.set("view engine", "handlebars");

let food = [
  { name: "arroz", price: "£2" },
  { name: "stake", price: "£7" },
  { name: "potato", price: "£2" },
  { name: "sausage", price: "£4" },
];

app.get("/", (req, res) => {
  let testUser = {
    name: "andrea",
    surname: "Pennisi",
    age: 41,
    email: "andrea@gmail.com",
    phone: "1234567890",
    role: "user",
  };
  res.render("index", {
    user: testUser,
    isAdmin: testUser.role === "admin",
    food,
  });
});

//setear de manera statica la carpeta public
app.use(express.static(__dirname + "./public"));

const server = app.listen(8080, () => console.log("Listening on PORT 8080"));
