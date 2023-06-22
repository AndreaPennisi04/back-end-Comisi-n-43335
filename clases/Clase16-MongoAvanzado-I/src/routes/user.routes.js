/*En routes es donde hacemos un endpoint de la ruta user que viene de la carpeta model user.model.js */
const { Router } = require("express");
/*En esta ruta de usuarios es donde hacemos el CRUD 
en linea 4 y 5 me traigo lo que hacemos es conectar las colecciones, osea hacer el ruteo para que una vez que esas colecciones esten disponibles, se pueda hacer un CRUD, crear(create) un usuario, leer (read) un dato y mostrarlo, Actualizar (update) un dato, cambiar su informacion interna, y borrar(delete) un dato para removerlo de nuestra coleccion*/
const userModel = require("../model/user.model"); //aca lo que estoy exportando es lo que se hizo en  notes.model.js, lo que declaramos para que funcione
const notesModel = require("../model/notes.model");

const router = Router();

router.get("/", async (req, res) => {
  const users = await userModel.find({});
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
  const { userId, noteId } = req.params;

  const user = await userModel.findOne({ _id: userId });
  console.log("🚀 ~ file: user.routes.js:31 ~ router.put ~ user:", user);

  // TODO: sino existe el usuario mandar un error
  const note = await notesModel.findById(noteId);
  console.log("🚀 ~ file: user.routes.js:36 ~ router.put ~ note:", note);

  // AGREGANDO LA NOTA AL USUARIO
  user.notes.push({ note: noteId });

  // actualizo el usuario
  const updatedUser = await userModel.updateOne({ _id: userId }, user);

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
