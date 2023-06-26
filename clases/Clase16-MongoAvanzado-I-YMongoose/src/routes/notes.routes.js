/*En routes es donde hacemos un endpoint de la ruta notes que viene de la carpeta model notes.model.js */
const { Router } = require("express");
const notesModel = require("../model/notes.model"); //aca lo que estoy exportando es lo que se hizo en  notes.model.js, lo que declaramos para que funcione

const router = Router();

//GET
router.get("/", async (req, res) => {
  // Select * from nombre_tabla
  const notes = await notesModel.find({}); //Metodo de busqueda con un find donde dentro de ({})con los {} le estoy mandando un objeto vacio,si dejaria solo () vacio, le estaria diciendo que me traiga todos los elementos de esas coleccion. noteModel basicamente es en donde el get va a ir a buscar
  return res.json({ message: `getALLnotes`, notes });
});

//POST: es para crear una nota
router.post("/", async (req, res) => {
  try {
    const noteBody = req.body;
    // TODO: VALIDAR EL BODY DE ENTRADA
    const newnote = await notesModel.create(noteBody);

    return res.json({ message: `createnote`, note: newnote });
  } catch (error) {
    console.log("🚀 ~ file: notes.routes.js:20 ~ router.post ~ error:", error);
  }
});

router.get("/:noteId", async (req, res) => {
  // este GET es para encontrar una nota a traves del ID. Esto se puede testear a traves de post man colocando en un metodo GET una url como esta: http://localhost:5000/api/notes/649445516c2262461cca3eb9 (el numero lago es el id generado por mongo compass local). Esto se logra con esta linea de codigo const noteData = await notesModel.findById({ _id: req.params.noteId });
  const noteData = await notesModel.findById({ _id: req.params.noteId });
  return res.json({ message: `getnoteById `, note: noteData });
});
/*El siguiente pedazo de codigo es para poder eliminar de una base de dato un objeto en particlular a traves del id por eso se declara como parametero "/:noteId" y lo que hago aca es eliminar solo uno await notesModel.deleteOne({ _id: req.params.noteId }) 
haciendolo con postman este seria el resultado {
    "message": "deletenoteById",
    "note": {
        "acknowledged": true,
        "deletedCount": 1
    }
    y si trato de buscarlo a traves del id con un metodo get este es el resultado     "message": "getnoteById ",
    "note": null
} y es null pq no existe mas ese id
}*/

router.delete("/:noteId", async (req, res) => {
  const deletenote = await notesModel.deleteOne({ _id: req.params.noteId });
  return res.json({
    message: `deletenoteById`,
    note: deletenote,
  });
});

module.exports = router;
