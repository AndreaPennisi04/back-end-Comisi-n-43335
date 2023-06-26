//Esta es la parte de como se crea un schema.
const mongoose = require("mongoose");

const collection = "Usuarios";

const schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  } /* le estoy indicando que quiero q ese campo(email) sea indexado. Esto en una busqueda de mas de 20 mil archivos, se hace mas facil. La busqueda se podra hacer por algo llamado B-tree, esto hace que la busqueda de un campo indexado NO requiera de recorrer la coleccion completa y de esta manera en milisegundo, se sabe donde esta el campo requerido y el tiempo de busqueda se reduzca un monton. Hay otros indices como:
    index compuestos: lo usamos por ejempo para definir un orden con el metodo sort
    index multikey: se requiere para una indexacion de valores en un array
    index text: busqueda de palabras especificas
    index geospatial: se utiliza para almacenar daa geospatial de dos coordenadas.
    IMPORTANTE: no se le puede agregar index a todos los campos de la coleccion, deben ser puntuales ej: email, telefono, direccion (como calle o CP), pq ewstos campos son unique, no se pueden repetir entonces para un envio, son datos unicos 
*/,
  age: Number,
  password: String,
  notes: {
    type: [
      {
        note: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "notas",
        },
      },
    ],
  },
});

// este schema es un middleware donde definimos un funcion para tener acceso al this que este caso es notes.note. El this hace referencia al schema
schema.pre("find", function () {
  this.populate("notes.note");
});

const userModel = mongoose.model(collection, schema); // Con .model:  definimos como son las collecciones de documentos en mongo
module.exports = userModel;
