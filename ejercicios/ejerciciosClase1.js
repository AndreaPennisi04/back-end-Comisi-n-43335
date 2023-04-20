const data = {
  nombre: "andrea",
  edad: 41,
  precio: 200,
  nombreDeSeries: ["Mandalorian", "Star wars", "Sailor Moon"],
  nombeDePeliculas: ["Gladietor", "The Grates Showman", "Encanto"],
};

console.log(data);

data.edad++;
console.log(data.edad);

data.nombreDeSeries.push("The big bang theory");
console.log(data.nombreDeSeries);

///
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
