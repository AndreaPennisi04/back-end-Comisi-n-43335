const { Router } = require("express");
const mongoose = "mongoose";
const router = Router();

const collection = "users";
const schema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  age: Number,
  password: String,
});

const userModel = mongoose.model(collection, schema);

module.export = userModel;
