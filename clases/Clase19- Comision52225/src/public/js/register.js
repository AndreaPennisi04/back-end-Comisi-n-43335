// esta carpeta se conecta conla carpeta register que esta en layouts register
const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const obj = {};
  dataforEach((value, key) => (obj[key] = value));
  console.log("Objeto formado");
  console.log(obj);
  fetch("/api/sessions/register", {
    // aca hacemos un fetch de la ruta register con un metodo post.Le paso un body que es el obj q es el const obj {} que esta vacio pero es el que obtiene la informacionque seria el email y la contrasena
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json", // esto es pq va a estar enviando un formato json
    },
  }).then(((result) => result.json()).then((json) => console.log(json)));
});
