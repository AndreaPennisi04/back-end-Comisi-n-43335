/* */
console.log("Hola");

// const random = require("./random");
// for (let i = 0; i < 1000; i++) {
//   const element = random[i];
// }
// random();

import moment from "moment";

const fechaActual = moment();
const fechaDeNacimiento = moment("1982-04-04");
if (fechaDeNacimiento.isValid()) {
  console.log(fechaActual.diff(fechaDeNacimiento, "dias"));
}
