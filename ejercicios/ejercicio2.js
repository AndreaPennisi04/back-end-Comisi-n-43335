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
