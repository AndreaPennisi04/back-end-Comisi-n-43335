// Hecho por el profesor
const fs = require("fs");

const fecha = new Date().toLocaleDateString();
const hora = new Date().toLocaleTimeString();

fs.writeFile("./fyh.txt", `Fecha: ${fecha} ... Hora: ${hora}`, (error) => {
  if (error) return console.log(`Error en la escritura: ${error}`);

  fs.readFile("./fyh.txt", "utf-8", (error, result) => {
    if (error) return console.log(`Error en la lectura: ${error}`);
    console.log(result);
  });
});
