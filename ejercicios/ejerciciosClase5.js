/* */
console.log("Hola Andrea");

/*Libreria Random*/
// const random = require("./random"); // para que funcione tendria que tener instalado la libreria "./random"
// for (let i = 0; i < 1000; i++) {
//   const element = random[(1, 20)];
//   console.log(element);
// }
// random();

/*Libreria Moment*/
// const moment = require("moment"); // los tres puntitos que aparecian en require era pq es una sintaxis vieja.
// //si te paras sobre el nombre pones quick fix y te lo pasa el ES6 como import moment from "moment"; que es la nueva sintaxis
// console.log(moment());

import moment from "moment";

const fechaActual = moment();
const fechaDeNacimiento = moment("1982-04-04");
if (fechaDeNacimiento.isValid()) {
  // si tenemos compararlo con un booleano se pone .isValid directamente, no necesitamos agregar ===true
  console.log(fechaActual.diff(fechaDeNacimiento, "days"));
}
