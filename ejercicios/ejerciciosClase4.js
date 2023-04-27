//Primer desafio de la clase
const fs = require("fs");

const almacenarFechaYHora = new Date();
// console.log(almacenarFechaYHora);
const fechaYHora = `${almacenarFechaYHora.toLocaleDateString()} ${almacenarFechaYHora.toLocaleTimeString()}`;

fs.writeFile("fecha.txt", fechaYHora, (error) => {
  if (error) throw error;
  console.log("El archivo ha sido creado.");
});

fs.readFile("fecha.txt", "utf8", (error, data) => {
  if (error) throw error;
  console.log(`El contenido del archivo es: ${data}`);
});

/* fs.appendFile("fecha.txt", "utf8", (error, data) => {
//   if (error) throw error;
//   console.log(`Error al leer el archivo`);
// });

// fs.unlink("fecha.txt", "utf8", (error, data) => {
//   if (error) return console.log(`No se puede eliminar el archivo`);
// });*/
