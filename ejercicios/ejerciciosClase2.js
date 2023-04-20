function mostrarLista1(arreglo) {
  if (arreglo.length === 0) {
    alert("Lista vacia");
    return;
  }
  for (i = 0; i < arreglo.lenght; i++) {
    console.log(arreglo[i]);
  }
  console.log(`Longitud de la lista es ${arreglo.length}`);
}

mostrarLista1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Ejercicio en clases
// const objetos = [
//   {
//     manzanas: 3,
//     peras: 2,
//     carne: 1,
//     jugos: 5,
//     dulces: 2,
//   },
//   {
//     manzanas: 1,
//     sandias: 1,
//     huevos: 6,
//     jugos: 1,
//     panes: 4,
//   },
// ];

// let mostrar = objetos.keys(...objetos);
// console.log(mostrar);

// let total = objetos.includes(...objetos);
// console.log(total);
