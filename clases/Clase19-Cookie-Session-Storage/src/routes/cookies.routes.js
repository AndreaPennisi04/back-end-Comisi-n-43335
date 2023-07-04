const { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
  console.log("Ingresando al get Cookies");
  const cookies = req.cookies;
  console.log("🚀 ~ file: cookies.routes.js:8 ~ router.get ~ cookies:", cookies);
  res.send(cookies);
});

router.post("/create", async (req, res) => {
  console.log("BODY****", req.body);
  res.cookie("cookieUser", { user: `${req.body.email}` }, { maxAge: 1000 }).send();
});

module.exports = router;
