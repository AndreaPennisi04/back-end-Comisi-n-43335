// Ejercicio en clases
const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];
console.log(objetos);

let newArray = [];
let total = 0;

objetos.forEach((objeto) => {
  const keys = Object.keys(objeto);
  const values = Object.values(objeto);

  total += values.reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);

  keys.forEach((key) => {
    if (!newArray.includes(key)) newArray.push(key);
  });
});

console.log(newArray);
console.log(total);

/* Definir clase Contador
La clase se creará con un nombre, representando al responsable del contador.
El contador debe inicializarse en 0
Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.
Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
Realizar prueba de individualidad entre las instancias.
*/

let contador = 0;

class Contador {
  constructor(contador) {
    this.contador = 2;
  }
  static contadorGlobal = 4;

  getResponsable = () => {
    console.log("Este es un metodo: getResponsable");
  };
  contar = () => {
    for (let i = 0; i == contador; i++) {
      console.log("Este es un metodo: contador");
    }
  };
  getCuentaIndividual = () => {
    console.log("Este es un metodo:getCuentaIndividual ");
  };
  getCuentaGlobal = () => {
    console.log("Este es un metodo: getcuentaGlobal");
  };
}
let contador1 = new Contador();
