const { Router } = require("express");

const router = Router();

/* Al conectar cookieParser con express, podremos gestionar dentro de nuestras peticiones, elementos correspondientes a cookies*/

router.get("/", (req, res) => {
  // esta "/" significa que es para logearme a la cookie
  console.log("ENTRO AL GET COOKIES", req.cookies);
  res.json({ cookie: req.cookies });
});

router.post("/create", (req, res) => {
  console.log("BODY****", req.body);

  res.cookie("cookieUser", { user: `${req.body.email}` }, { maxAge: 200000 }).send();
});
/*si ponemos desde el http://localhost:5000/api/cookies/  {
cookie: { }
} con application cookies con el numero de puerto y vacio */

router.get("/delete", (req, res) => {
  console.log("Delete cookies****", req.cookies);
  res.clearCookie("cookieUser").send("cookies rest OK");
});

module.exports = router;
