const socket = io(); // establecer la conexion del lado del cliente

socket.emit("message", "Hola desde el lado del Front");

socket.on("evento_socket_individual", (data) => {
  console.log(data);
});

socket.on("evento_todos_menos_actual", (data) => {
  console.log(data);
});

socket.on("evento_todos", (data) => {
  console.log(data);
});
