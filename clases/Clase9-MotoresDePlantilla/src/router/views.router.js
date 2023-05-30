import express from "express";

const router = express.Router();
let food = [
  { name: "arroz", price: "£2" },
  { name: "stake", price: "£7" },
  { name: "potato", price: "£2" },
  { name: "sausage", price: "£4" },
];

app.get("/", (req, res) => {
  let testUser = {
    name: "andrea",
    surname: "Pennisi",
    age: 41,
    email: "andrea@gmail.com",
    phone: "1234567890",
    role: "user",
  };
  res.render("index", {
    user: testUser,
    style: "index.css",
    isAdmin: testUser.role === "admin",
    food,
  });
});

app.use("/", viewsRouter);

export default Router;
