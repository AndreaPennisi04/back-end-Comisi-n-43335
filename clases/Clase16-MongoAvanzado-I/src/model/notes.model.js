const { Schema, model } = require("mongoose");

const collection = "notas";

const schema = new Schema({
  //.Shema: con esta primitiva que viene de mongoose (const mongoose = require("mongoose"), estamos creando la coleccion y definiendo de la coleccion
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const notesModel = model(collection, schema); // la coleccion es la coleccion de los datos y los schemas se dice cuales son los campos que queremos y cuales son los requeridos
module.exports = notesModel;

/*En notes.model tenemos toda la conexion la interface de lo que debe colectar mongoose y verlo en mongo compas  */
