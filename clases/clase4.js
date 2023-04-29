// Hecho por el profesor
// const fs = require("fs");

// const fecha = new Date().toLocaleDateString();
// const hora = new Date().toLocaleTimeString();

// fs.writeFile("./fyh.txt", `Fecha: ${fecha} ... Hora: ${hora}`, (error) => {
//   if (error) return console.log(`Error en la escritura: ${error}`);

//   fs.readFile("./fyh.txt", "utf-8", (error, result) => {
//     if (error) return console.log(`Error en la lectura: ${error}`);
//     console.log(result);
//   });
// });

const valoresNumericos = [1, 2, 3, 4, 5];

// const nuevosValores = valoresNumericos.map((valor = valor + 1));

// console.log(nuevosValores);

//Callback: un callback es una funcion dentro de una funcion como en el ejemplo abajo
const funcionCallback = (valor) => {
  if (valor % 2 === 0) {
    //Cuando la division da 0, es par, si da otra cosa es impar
    return `${valor} es un numero par`;
  } else {
    return "No es par ";
  }
};

const valoresParOImpar = valoresNumericos.map(funcionCallback); // aca defino si es par o impar usando MAP
console.log(valoresParOImpar); // me dice que 1, 3 y 5 no son pares y 2,4 son se muestran

//MAP paso a paso

const miMap = (array, callback) => {}; // vamos a tener un arreglo de enrada(array) y otro de salida(callback)
