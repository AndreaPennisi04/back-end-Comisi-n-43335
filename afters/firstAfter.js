//EJERCICIO 2 ¿Cómo lo hacemos? Se creará una clase que permitirá llevar una gestión completa de usuarios que deseen acceder a dichos eventos.

/* Registrador de tickets de eventos
Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
nombre
lugar
precio (deberá agregarse un 0.15 del valor original)
capacidad (50 por defecto)
fecha (hoy por defecto)
El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío.
Debe contar con un método “agregarUsuario” El cual recibirá:
id del evento (debe existir, agregar validaciones)
id del usuario
El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
Debe contar con un método “ponerEventoEnGira” El cual recibirá:
id del evento
nueva localidad
nueva fecha
El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades)
*/

class TicketManager {
  #precioBaseGanancia = 0.15;

  constructor() {
    // constructor de eventos con un array vacio para que el listado de evento aparezca vacio de un inicio
    this.eventos = [];
  }
  getEventos = () => {
    return this.eventos;
  };

  agregarEvento = (nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleDateString()) => {
    const evento = {
      nombre,
      lugar,
      precio,
      capacidad,
      fecha,
      participantes: [], // participantes empieza en con un array vacio pq no sabemos cuantos tickets se van a vender
    };
    if (this.eventos.length === 0) {
      // el 0 aca es pq cuando contamos y usamos length empiza de 1. osea 0 es la posicion 1.
      evento.id = 1;
    } else {
      evento.id = this.eventos[this.eventos.length - 1].id + 1; // se le resta 1 pq como el contador empiza por la posicion 0, cuando cuente me va a contar mal.
      // por ejemplo: si tengo 4 elementos que empieza el conteo desde 0, el id se va a confundir y va a contar mal los elementos. Y despues se le agrega un 1 pq viene desde el 0.
      // De esta manera puedo obtner los numeros reales de los elementos y hacer que sea autoincrementable.
    }
    this.eventos.push(evento); //esto es para inserta un evento
  };

  agregarUsuario = (idEvento, idUsuario) => {
    const eventoIndex = this.eventos.findIndex((evento) => evento.id === idEvento); // Esta constante se crea para guardar el id del evento y el usuario
    // findindex retorna la posicion del arreglo
    if (eventoIndex === -1) {
      console.log("Evento no encontrado");
      return; // el return es para que me devuelva el mensaje del console.log
    }
    const usuarioRegistrado = this.eventos[eventoIndex].participantes.includes(idUsuario);
    // includes me va a decir si hay algun usuario registrado pasando como parametro a idUsuario que es donde va a estar registrado el usuario

    if (usuarioRegistrado) {
      console.log("Usuario ya registrado");
      return;
    }
    this.eventos[eventoIndex].participantes.push(idUsuario);
  };
}

// Ahora se crea una instancia

const manejadorDeEventos = new TicketManager(); //aca estoy creando una nueva instancia que no esta instanciada aun
manejadorDeEventos.agregarEvento("Guns & Roses", "Glasgow", 600); // valores de la constante evento line 38// manejadorDeEventos.agregarUsuario(1, 1);
manejadorDeEventos.agregarEvento("Guns & Roses", "Edinburgh", 600); // manejadorDeEventos.agregarUsuario(2, 2);
manejadorDeEventos.agregarEvento("Guns & Roses", "Madrid", 1000); // manejadorDeEventos.agregarUsuario(3, 3);
manejadorDeEventos.agregarEvento("Guns & Roses", "Barcelona", 900); // manejadorDeEventos.agregarUsuario(4, 4);

//Agregar ususario
manejadorDeEventos.agregarUsuario(1, 1); //aca valida todo lo hecho en la linea 57
manejadorDeEventos.agregarUsuario(2, 2);
manejadorDeEventos.agregarUsuario(3, 3);
manejadorDeEventos.agregarUsuario(4, 4);
manejadorDeEventos.agregarUsuario(4, 4); // este tiene que decir ususario ya registrado
manejadorDeEventos.agregarUsuario(5, 5); // este tiene q decir usuario no encontrado

console.log(manejadorDeEventos.getEventos()); // esto muestra el evento:   {
//   nombre: 'Guns & Roses',
//   lugar: 'Glasgow',
//   precio: 600,
//   capacidad: 50,
//   fecha: '4/25/2023',
//   participantes: [ 1 ],
//   id: 1
// },
