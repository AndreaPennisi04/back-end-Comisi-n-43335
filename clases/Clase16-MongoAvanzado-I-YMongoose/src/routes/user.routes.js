/*En routes es donde hacemos un endpoint de la ruta user que viene de la carpeta model user.model.js */
const { Router } = require("express");
/*En esta ruta de usuarios es donde hacemos el CRUD 
en linea 4 y 5 me traigo lo que hacemos es conectar las colecciones, osea hacer el ruteo para que una vez que esas colecciones esten disponibles, se pueda hacer un CRUD, crear(create) un usuario, leer (read) un dato y mostrarlo, Actualizar (update) un dato, cambiar su informacion interna, y borrar(delete) un dato para removerlo de nuestra coleccion*/
const userModel = require("../model/user.model"); //aca lo que estoy exportando es lo que se hizo en  notes.model.js, lo que declaramos para que funcione
const notesModel = require("../model/notes.model");

const router = Router();

router.get("/", async (req, res) => {
  const users = await userModel.find({}).populate("notes.note"); // el populate es para que me muestre el nombre de la nota pq por el momento me lo esta trayendo solo como un ID. de esta forma me trae el nombre de note con toda su info(id, title, content) es lo que esta definido en usermodel.
  //todo lo que tenga find + populate find hace que encuentre el metodo y lo popule.
  return res.json({ message: `getAllUsers`, users });
});

router.post("/", async (req, res) => {
  try {
    const userBody = req.body;
    const newUser = await userModel.create(userBody);

    return res.json({ message: `createUser`, user: newUser });
  } catch (error) {
    console.log("🚀 ~ file: user.routes.js:18 ~ router.post ~ error:", error);
  }
});

router.get("/:userId", async (req, res) => {
  // SIRVE CON EL POPULATION
  // const userData = await userModel.find({ _id: req.params.userId });
  const userData = await userModel.findById({ _id: req.params.userId });
  return res.json({ message: `getUserById `, user: userData });
});

router.put("/:userId/notes/:noteId", async (req, res) => {
  const { userId, noteId } = req.params; // que me traiga el user y la nota a travez de re.params

  const user = await userModel.findOne({ _id: userId });
  console.log("🚀 ~ file: user.routes.js:31 ~ router.put ~ user:", user);

  // TODO: sino existe el usuario mandar un error
  const note = await notesModel.findById(noteId); // esta linea es para verificar que la nota exista
  console.log("🚀 ~ file: user.routes.js:36 ~ router.put ~ note:", note);

  // AGREGANDO LA NOTA AL USUARIO
  user.notes.push({ note: noteId }); // aca lo que debo realizar es un push de la nota por lo q entre ({}) lo que hago es poner la key que se encuentra en usermodels que esta dentro de type que se llama nota  donde luego de los : lo que pusheo es la noteId

  // actualizo el usuario, esto es para actualizar lo que se ingreso en la linea user.notes.push({ note: noteId });
  const updatedUser = await userModel.updateOne({ _id: userId }, user); // user es donde se debe actualizar todo el objeto y me reemplaza lo que cambia esto lo hace mongoose ODM

  return res.json({
    message: `add a specific note to an user`,
    updated: updatedUser,
  });
});

router.delete("/:userId", async (req, res) => {
  const deleteUser = await userModel.deleteOne({ _id: req.params.userId });
  return res.json({
    message: `deleteUserById`,
    user: deleteUser,
  });
});

module.exports = router;
