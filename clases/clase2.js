//Nuevas funcionalidades de los lenguajes ECMAScript
//Map
let valorBase = [0, 2, 4, 6, 8, 10];
const valores = valorBase.map((numero, indice) => numero ** indice);
console.log(valores);

//Includes
let numerosIncluidos = [0, 2, 4, 6, 8, 10];
if (numerosIncluidos.includes(11)) {
  console.log("Numero incluido en el array");
} else {
  console.log("El numero no esta en el array");
}

//Ejemplo de uso de Object.entries, Object.keys, Object.values
const objetos = {
  model1: "EV 8", //modelo1,2,so on, el atributo del lado izq es la Key y el de la derecha, el valor
  model2: "Niro",
  model3: "Sportage",
  model4: "Sorento",
  model5: "Picanto",
  model6: "Rio",
};
console.log(objetos);

//Para devolver arrays de arrays usamos "Entries"
let arraysDeArrays = Object.entries(objetos);
console.log(arraysDeArrays);

//Para devolver solo las keys, debo construir una nueva variable para poder llamarla
let llamarKeys = Object.keys(objetos);
console.log(llamarKeys);

//Para devolver SOLO los valores. Si son numeros, este metodo nos ayudaria a realuzar la suma total
let llamarValores = Object.values(objetos);
console.log(llamarValores);

//El metodo Reduce: se usa cons valores numericos
const numeros = {
  impuesto1: 100,
  impuesto1: 300,
  impuesto1: 50,
  impuesto1: 500,
};
let hacerUnReduce = Object.values(numeros);
console.log(hacerUnReduce);
let reducir = hacerUnReduce.reduce((valorInicial, valorAcumulado) => valorInicial + valorAcumulado);
console.log(reducir);

//Spread
const objeto1 = {
  propiedad1: 2, /// siempre se declar key and value. Keu es propiedad1,2,3,4,5 y el value es lo que esta despues de los :.
  propiedad2: "b",
  propiedad3: true,
};

const objeto2 = {
  propiedad1: "c",
  propiedad2: [1, 2, 3, 4],
};
const objeto3 = {
  propiedad4: "c",
  propiedad5: [5, 6, 7, 8],
};

const objetoResultante = {
  ...objeto1, //spread operato para que concatene el objeto1 y el objeto2
  ...objeto2,
  ...objeto3,
};
console.log(objetoResultante); // devuelve un nuevo objeto con el resultado de la concatenacion de los dos objetos. Cuando
// hay dos propiedades que tiene el mismo nombre, se sobrescribe y se toma el ultimo. Sino imprime todas las propiedades normalmente

//Rest: va a excluir algún elemento del objeto. Esto sirve para excluir un atributo. Quiero que me muestre las propiedades pero no todas sino algunas
const excluir = {
  name1: "Serena",
  name2: "Daryen",
  name3: "Chibiusa",
  name4: "Rei",
};
console.log(excluir); // este es para ver que tengo dentro de la variable

const { name4, ...rest } = excluir;
console.log(rest); //Este es para mostrar que se saco

//string.trim()
const texto = "         feli";
const text1 = "         cidad";
const texto2 = texto.trim() + text1.trim();
console.log(texto2); // saca los espacion de inicio
console.log(texto, text1); //imprime los espacios
console.log(texto.length); // esto es pasa saber la longitud de cuantos espacios ocupo en la memoria

//Flat: para generar un array plano cuando tenemos un anidamiento de arrays dentro de un array.
const arregloAnidado = ["1", 2, 3, 4, [5, 6, 6], [8, 9, 10, 11, [13, 14, 156]]];
console.log(arregloAnidado.flat(10));

//Nullish: no quiero recibir datos indefinidos o nulos
const prueba = undefined;

const variableAsignada = prueba && "Sin valor";

const nullish = prueba ?? "Sin valor";

console.log(variableAsignada);
console.log(nullish);
