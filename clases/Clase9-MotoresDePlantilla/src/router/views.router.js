import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const user = {
    name: "andrea",
    surname: "Pennisi",
    age: 41,
    role: "user",
  };
  res.render("home", {
    name: user.name,
    surname: user.surname,
    role: user.role,
  });
});

router.get("/food", (req, res) => {
  const food = [
    { name: "arroz", price: "£2" },
    { name: "stake", price: "£7" },
    { name: "potato", price: "£2" },
    { name: "sausage", price: "£4" },
  ];
  res.render("food", {
    food,
  });
});

export default router;
