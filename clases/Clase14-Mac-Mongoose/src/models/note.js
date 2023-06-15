const { Schema, model } = require("mongoose");

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    unique: true,
  },
  // ,{
  //       timestamps: true,
  //     }
  //createdAt:// esto es para saber cuando fue creado
  //updateAt: //esto es para saber cuando fue actualizado
});

model.export = model("Note", NoteSchema);
