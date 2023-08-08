const mongoose = require("mongoose");

const collection = "notes";

const schema = new mongoose.Schema({
  title: String,
  content: String,
});

const notesModel = mongoose.model(collection, schema);
module.exports = notesModel;
