const socket = io(); // Para poder usar socket

let user;
let chatBox = document.getElementById("chatBox");

Swal.fire({
  title: "Identifiquesé",
  input: "text",
  text: "Ingresa tu nombre de usuario para ingresar en el chat",
  inputValidator: (value) => {
    return !value && "Necesitas un nombre de usuario para continuar";
  },
  allowOutsideClick: false,
  allowEscapeKey: false,
}).then((result) => {
  user = result.value;
  socket.emit("authenticated", user); // esto muestra a los otros usuarios que alguien se ha conectado
});

chatBox.addEventListener("keyup", (evt) => {
  if (evt.key === "Enter") {
    if (chatBox.value.trim().length > 0) {
      //Aca se valida que no se envie un mensaje vacio
      socket.emit("message", { user, message: chatBox.value }); //Aca se emite el socket de mensaje y ususario
      chatBox.value = "";
    }
  }
});

//Esto es para que se pueda ver los mensajes
socket.on("messageLogs", (data) => {
  let log = document.getElementById("messageLogs");
  let messages = "";
  data.forEach((message) => {
    //Esto es para cada mensaje
    messages += `${message.user} dice: ${message.message}<br/>`;
  });
  log.innerHTML = messages;
});

socket.on("newUserConnected", (data) => {
  Swal.fire({
    toast: true,
    position: "top-end",
    showConfirmationButton: false,
    timer: 3000,
    title: `${data} sa ha unido al chat`,
    icon: "success",
  });
});
