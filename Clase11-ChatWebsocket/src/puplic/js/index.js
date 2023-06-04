const socket = io();
let user;
let chatBox = document.getElementById("chatbox");
Swal.fire({
  title: "Identificate",
  input: "texto",
  text: "Ingresar el usuario para identificarte en el chat",
  inputValidator: (value) => {
    return !value && "Necesitas un nombre de usuario para continuar!";
  },
  allowOutsideClick: false,
  allowEscapekey: false,
}).then((result) => {
  user = result.value;
});

chatBox.addEventListener("keyup", (evt) => {
  if (evt.key === "enter") {
    if (chatBox.value.trim().lenght > 0) {
      socket.emit("message", { user: user, message: chatBox.value });
      chatBox.value = "";
    }
  }
});

socket.on("messageLogs", (data) => {
  let log = document.getElementById;
  ("messageLogs");
  let messages = "";
  data.forEach((message) => {
    message = message + `${message.user} dice: ${message.message}</br>`;
  });
  log.innerHTML = messages;
});
