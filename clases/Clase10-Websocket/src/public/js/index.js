const socket = io(); // establecer la conexion del lado del cliente donde puedo hacer peticiones.

socket.emit("message", "Hola a todos, esto es un mensaje desde en Front");

socket.on("evento_socket_individual", (data) => {
  console.log(data);
});

socket.on("evento_todos_menos_actual", (data) => {
  console.log(data);
});

socket.on("evento_todos", (data) => {
  console.log(data);
});
