// map seria una funcion dentro de otra funcion y es para crear un nuevo array
/* declarar primero la funcion lo que va hacer , como la equacion para luego utilizarla
cuando realice una variable que tenga los parametros 
*/
let valoresOriginales = [1, 2, 3, 4];
const functionCallBack = (valor) => {
  if (valor % 2 === 0) {
    //esto evalua si los valores declarados en el array (valoresOriginale) que son pares y que no.
    return valor;
  } else {
    return "No es par";
  }
};
const evaluacionDePares = valoresOriginales.map(functionCallBack);
console.log(evaluacionDePares); // Esto devuelve:  ['No es par', 2, 'No es par', 4]
// 0
// :
// "No es par"
// 1
// :
// 2
// 2
// :
// "No es par"
// 3
// :
// 4

//Map, como funciona el map por dentro
const mifuncionMap = (arreglo, callback) => {
  const nuevoArreglo = [];

  for (let i = 0; i < arreglo.length; i++) {
    //i++ ocupa dar la vuelta de uno en uno, primero llama al uno luego al 2 luego al3 luego al 4
    //i<arreglo.length es para medir el array
    const nuevoValor = callback(arreglo[i]); // esto se construye para devolver el array vacio con la equacion hecha el for
    nuevoArreglo.push(nuevoValor); //aca lo que hago es llamar el nuevovalor y empujarlo al nuevo array
  }
  return nuevoArreglo;
};
const result = mifuncionMap(valoresOriginales, (x) => x * 2); // valoresoriginales es: let valoresOriginales = [1, 2, 3, 4];declarada al principio, "x" seria cada uno de ellos
//[1, 2, 3, 4] lo que vuelve a llamar a esos numeros y los multiplica por 2 (x * 2)
console.log(result); //Resultado [2, 4, 6, 8]

//Callback con diferentes operaciones
let sumar = (numero1, numero2) => numero1 + numero2;
let restar = (numero1, numero2) => numero1 - numero2;
let multiplicar = (numero1, numero2) => numero1 * numero2;
let dividir = (numero1, numero2) => numero1 / numero2;

const realizarOperaciones = (numero1, numero2, callback) => {
  const resultado = callback(numero1, numero2);
  console.log(`${resultado}`);
};
realizarOperaciones(2, 5, sumar);
realizarOperaciones(2, 5, restar);
realizarOperaciones(2, 5, multiplicar);
realizarOperaciones(2, 5, dividir);

//Promesas
