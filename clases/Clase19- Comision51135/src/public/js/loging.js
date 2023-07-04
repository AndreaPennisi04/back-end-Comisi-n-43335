// esta carpeta se conecta conla carpeta login que esta en layouts loging
const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const obj = {};
  dataforEach((value, key) => (obj[key] = value));
  fetch("/api/sessions/login", {
    // aca hacemos un fetch de la ruta login con un metodo post.Le paso un body que es el obj q es el const obj {} que esta vacio pero es el que obtiene la informacionque seria el email y la contrasena
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json", // esto es pq va a estar enviando un formato json
    },
  }).then((result) => {
    if (result.status === 200) {
      // esto es un estado success que lo envia a la ruta de usuarios
      window.location.replace("/users"); // esto es users.views.router en router y en app.js app.use("/users", usersViewRouter);
    }
  });
});
