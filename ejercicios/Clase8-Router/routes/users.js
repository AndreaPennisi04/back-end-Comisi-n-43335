const express = require("express");
const router = express.Router();

let users = [];

const middlewareCoder = (req, res) => {
  let user = req.body;
  if (!user.name || !user.surname || !user.age) return res.status(400).send({ err: "Data is required" });
  next();
};

router.get("/", (req, res) => {
  res.send({ users });
});

router.post("/", middlewareCoder, (req, res) => {
  let user = req.body;
  users.push(user);
  req.send({ message: "User created!", user, users });
});

module.exports = router;
