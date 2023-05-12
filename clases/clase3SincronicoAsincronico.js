// map seria una funcion dentro de otra funcion y es para crear un nuevo array
/* declarar primero la funcion lo que va hacer , como la equacion para luego utilizarla
cuando realice una variable que tenga los parametros 
*/
// let valoresOriginales = [1, 2, 3, 4];
// const functionCallBack = (valor) => {
//   if (valor % 2 === 0) {
//     //esto evalua si los valores declarados en el array (valoresOriginale) que son pares y que no.
//     return valor;
//   } else {
//     return "No es par";
//   }
// };
// const evaluacionDePares = valoresOriginales.map(functionCallBack);
// console.log(evaluacionDePares); // Esto devuelve:  ['No es par', 2, 'No es par', 4]
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
// const mifuncionMap = (arreglo, callback) => {
//   const nuevoArreglo = [];

//   for (let i = 0; i < arreglo.length; i++) {
//     //i++ ocupa dar la vuelta de uno en uno, primero llama al uno luego al 2 luego al3 luego al 4
//     //i<arreglo.length es para medir el array
//     const nuevoValor = callback(arreglo[i]); // esto se construye para devolver el array vacio con la equacion hecha el for
//     nuevoArreglo.push(nuevoValor); //aca lo que hago es llamar el nuevovalor y empujarlo al nuevo array
//   }
//   return nuevoArreglo;
// };
// const result = mifuncionMap(valoresOriginales, (x) => x * 2); // valoresoriginales es: let valoresOriginales = [1, 2, 3, 4];declarada al principio, "x" seria cada uno de ellos
// //[1, 2, 3, 4] lo que vuelve a llamar a esos numeros y los multiplica por 2 (x * 2)
// console.log(result); //Resultado [2, 4, 6, 8]

// const valoresNumericos = [1, 2, 3, 4, 5];

// const nuevosValores = valoresNumericos.map((valor = valor + 1));

// console.log(nuevosValores);

//Callback: un callback es una funcion dentro de una funcion como en el ejemplo abajo. IMPORTANTE: el callback va siempre al final en un parametro pq es el ultimo q se llama
// const funcionCallback = (valor) => {
//   if (valor % 2 === 0) {
//     //Cuando la division da 0, es par, si da otra cosa es impar
//     return `${valor} es un numero par`;
//   } else {
//     return "No es par ";
//   }
// };

// const valoresParOImpar = valoresNumericos.map(funcionCallback); // aca defino si es par o impar usando MAP
// console.log(valoresParOImpar); // me dice que 1, 3 y 5 no son pares y 2,4 son se muestran

/*MAP paso a paso*/
//Este ejemplo de const myMap es lo que hace el map por dentro. comienza y cierra con las {}
// const miMap = (array, callback) => {
//   // vamos a tener un arreglo de enrada(array) y otro de salida(callback) como parametro
//   const nuevoArreglo = []; // creamos un array vacio para que me devuelva mi funcion map
//   for (let i = 0; i < array.length; i++) {
//     //Creo en bucle para que recorra el array y me traiga un elemento
//     const nuevoValor = callback(array[i]); //hago una nueva variable para que me muestre el nuevoValor de lo que devuelve el map. el 1 es el indice del arreglo
//     nuevoArreglo.push(nuevoValor); // aca se lama al arreglo vacio para que el nuevovalor pasdo como parametro haga el push y traiga ese nuevo array
//   }
//   return nuevoArreglo; // hay que hacer un return para que devuelva el nuevo arreglo
// };

// const resultado = miMap(valoresNumericos, (x) => x * 2); // el callback en este caso es x => x*2 pq todavia no lo habiamos usado.
// //El callback que esta dentro de la funcion es para la llamada detro de la variable no el callback del parametro
// console.log(resultado); //[ 2, 4, 6, 8, 10 ]

//Callback con diferentes operaciones
// let sumar = (numero1, numero2) => numero1 + numero2;
// let resta = (numero1, numero2) => numero1 - numero2;
// let multiplicar = (numero1, numero2) => numero1 * numero2;
// let dividir = (numero1, numero2) => numero1 / numero2;

// const realizarOperaciones = (numero1, numero2, callback) => {
//   const resultado = callback(numero1, numero2);
//   console.log(`${resultado}`);
// };
// realizarOperaciones(2, 5, sumar);
// realizarOperaciones(2, 5, resta);
// realizarOperaciones(2, 5, multiplicar);
// realizarOperaciones(2, 5, dividir);

// /*Realizar Operaciones con callback*/

// const suma = (a, b) => a + b;
// const restar = (a, b) => a - b;
// const multiplicacion = (a, b) => a * b;
// const division = (a, b) => a / b;

// const realizarOperacionNumerica = (a, b, callback) => {
//   const result = callback(a, b);
//   console.log(result);
// };

// realizarOperacionNumerica(25, 5, suma); // suma, resta, multiplicacion y division son los callback es el 3 parametro pasado aca
// // const realizarOperacionNumerica = (a, b, callback) => { 25 es el parametro a y el 5 es el b
// realizarOperacionNumerica(25, 5, restar);
// realizarOperacionNumerica(25, 5, multiplicacion);
// realizarOperacionNumerica(25, 5, division);
//RealizarOperacionNumerica, resultado:
// 30
// 20
// 125
// 5

/*Promesas: objeto especial que nos permite encapsular una operacion que reaccionan a dos posibles situaciones:
que pasa si la promesa se cumple y que pasa si no
si se hace una promesa queda en estado de pending que luego se notifica como FULFILLED O RESOLVED(esto quiere decir que 
la promesa se cumplio) o REJECTED, que la promesa fue rechazada.
PAra usar los estados de resolved y rejected se usa: .then(para casos en el que se haya cumplido) o .catch(para cuando
la promesa no se haya cumplido)*/

// const dividir = (dividendo, divisor) => {
//   return new Promise((resolve, reject) => {
//     if (divisor === 0) {
//       reject("No se puede hacer divisiones entre 0");
//     } else {
//       resolve(dividendo / divisor);
//     }
//   });
// };
// una vez creada nuestra promesa, podemos empezar a utilizarla. Entonces ahora si le pasamos los valores:
// dividir(6, 3)// para then: resultado por consola: 2
// dividir(6, 0) // para catch. resultado por consola: No se puede hacer divisiones entre 0
//   .then((resultado) => {
//     // then se utiliza para cuando la promesa es resuelta
//     console.log(resultado);
//   })
//   .catch((error) => {
//     // catch se utiliza para cuando la promesa se rejecta
//     console.log(error);
//   });

/*Sincronismo VS Asincronismo*/

/*Sincronismo: ejecuta instrucciones de una funcion a la vez, osea que debe finalizar una funcion para continuar con l otra.
Las operaciones sincronas son bloqueantes. Las tareas no pueden ejecutarse hasta q la primera no haya terminado. 
En esta funcion mostramos que solo llamando a la primer funcion A, hace la llamada primero de las finciones principales
para llamar luego a la segunda */
// function A() {
//   console.log(1);
//   B();
//   console.log(7);
// }
// function B() {
//   console.log(2);
//   C();
//   console.log(6);
// }
// function C() {
//   console.log(3);
//   D();
//   console.log(5);
// }
// function D() {
//   console.log(4);
// }

// A();

/*Asincronico: estas tareas trabajan en paralelo. Cada una sigue un hilo de resolucion. Ojo, ya que no controlamos cuando termina, solo
cuando comienza. si una tarea depende del resultado de la otra, habrá problemas, pues esperará su ejecución en paralelo.
Cuando la operación de escritura termina, ejecuta el callback que informará por pantalla que la escritura se realizó con éxito.*/

/*Async / Await:Cuando necesitamos mas que solo una operacion para poder ejecutaralgo asincrono, no basta solo con el uso de una promesa
, tambien ncesitamos un entorno completo para ejecutar dicha operacion.
.then en este caso nos sirve para encadenar las promesas y obtener sus resultados pero no nor permite un entorno compelto asincono y nos obliga a trabajar
TODO dentro de ese scope. Then y catch sufren del encapsulamiento eexcesivo, impidiendo o limitando que podamos acceder a los recursos de algunos resultados, variables, etc.*/
/*Async y await son palabras reservadas qu sirven para gestionar un entorno asincrono resolviendo las limitaciones del .then y .catch*/
/*ASYNC se coloca al inicio de la funcion*/
/*AWAIT servira para esperar por el resultado de la promesa y traer su resultado. 
Es importante encerrar el cuerpo en un bloque try {} catch {}*/

// const dividir = (dividendo, divisor) => {
//   // esta constante es la base o el inicio de como se ejecurtara lo que ponga en la funcion: const funcionAsincrona =
//   //
//   return new Promise((resolve, reject) => {
//     if (divisor === 0) {
//       reject("No se puede hacer divisiones entre 0");
//     } else {
//       resolve(dividendo / divisor);
//     }
//   });
// };

// const funcionAsincrona = async () => {
//   try {
//     const result = await dividir(10, 5); // esto me va a traer el numero 2
//     //const resultado = await dividir(10, 0); // esto me va a imprimir No se puede hacer divisiones entre 0
//     console.log(result);
//     //console.log(resultado);
//   } catch (error) {
//     console.log(error);
//   }
// };
// funcionAsincrona();
