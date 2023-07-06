const { Router } = require("express");
const userModel = require("../models/users.model");

const router = Router();

//register
router.post("/register", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  console.log("User registrated");
  console.log(req.body);

  const exists = await userModel.findOne({ email });
  if (exists) {
    return res.status(400).send({ status: "error", msg: "Existed user" });
  }
  const user = {
    first_name,
    last_name,
    email,
    password, // se debe encriptar pero eso es para mas adelante
  };

  //esto es para crear el ususario a mi base de datos
  const result = await userModel.create(user);
  res.status(201).send({ status: "success", message: "user creted successfully with ID: " + result.id });
});

// login
router.post("/lognin", async (req, res) => {
  const { email, password } = req.body; // como estoy capturando informacion del usuario hago un req.body
  const user = await userModel.findOne({ email, password }); // aca el pasword se pasa asi pq todavia no esta encriptado pero mas adelante se le dara otro formato que seria un hash. Por ahora lo dejamos asi

  if (!user) return res.status(401).send({ status: "error", error: "Incorrect credencials" });
  // Aca se crea la session
  req.session.user = {
    name: `${user.first_name} ${user.last_name}`,
    email: user.email,
  };
  res.send({ status: "success", payload: req.session.user, message: "First login! 👏👏" });
});

module.exports = router;
