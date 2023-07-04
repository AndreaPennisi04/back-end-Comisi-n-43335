const { Router } = require("express");
const router = Router();

const collection = "users";
const schema = mongoose.schema({
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

export default userModel;
