const { Router } = require("express");
const router = Router();

//Este path vacion va hacer una vista de una person adeslogueada por eso se hace una vista con un profile que se le envia una data que es la data del ususario.
//(En su conjunto, estos get profile, login y register es solo para las vistas, aca todavia no hay un post un delete, nada aun)
router.get("./", (req, res) => {
  res.render("profile", {
    user: req.session.user,
  });
});

router.get("./login", (req, res) => {
  res.render("login");
});

router.get("./register", (req, res) => {
  res.render("register");
});

module.exports = router;
