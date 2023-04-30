/* Calculadora positiva con promesas (HANDS ON LAB)
¿Cómo lo hacemos? Se crearán un conjunto de funciones gestionadas por promesas y un entorno ASÍNCRONO  donde podremos ponerlas a prueba
Definir función suma:
Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0
En caso de que algún sumando sea 0, rechazar la promesa indicando “Operación innecesaria”.
En caso de que la suma sea negativa, rechazar la promesa indicando “La calculadora sólo debe devolver valores positivos
Definir función resta:
Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando “Operación inválida
En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando “La calculadora sólo puede devolver valores positivos”
Definir una función multiplicación:
Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
Si el producto es negativo, rechazar la oferta indicando “La calculadora sólo puede devolver valores positivos
Definir la misma función división utilizada en esta clase.
Definir una función asíncrona “cálculos”, y realizar pruebas utilizando async/await y try/catch*/

const suma = (numb1, numb2) => {
  return new Promise((resolve, reject) => {
    if (numb1 === 0 || numb2 === 0) reject("Operacion invalida"); // validacion de que el resultado no sea 0 si es, que lo rejecte
    if (numb1 + numb2 < 0) reject("La calculadora debe devolver numeros positivos"); // validacion de que el resultado de la suma de ambos no sea menor a 0
    resolve(numb1 + numb2);
  });
};
// puedo cambiar para resta, multiplicacion y division
const calculo = async () => {
  try {
    const primerNumero = 10;
    const segundoNumero = 22;
    console.log(await suma(numb1, numb2));
  } catch (error) {
    console.log(error);
  }
};
calculo(); // resultado 32
