import mongoose from "mongoose";
const bcrypt = require("bcryptjs"); // es para encriptar claves

const userCollection = "usuarios"; //asi es como llevara la coleccion en nuestra base de datos.

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  edad: Number,
  dni: { type: String, required: true },
  curso: { type: String, required: true },
  nota: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  //   ,{
  //     timestamps:true
  //   }
});

//sifrar claves cp,p passwoord
userSchema.methods.encrypPassword = async (password) => {
  const salt = await bcrypt.genSalt(10); // esnto es para general un salt de sifrado. Tambien se lo crea como constante para que lo guarde
  return await bcrypt.hash(password, salt); // esto devuelkve la contrasena sifrada de la que coloca el usuario y el q esta guardado en la base de datos
};

UserSchema.methods.matchPassword = function (password) {
  bcrypt.compare(password, this.password); // esto es para comparar la clave q pone el ususario y la clave gusrdada en la base de datos
};
export const userModel = mongoose.model(userCollection, userSchema);
