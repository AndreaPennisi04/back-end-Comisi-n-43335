const { Router } = require("express");

const router = Router();

router.get("/login", async (req, res) => {
  const username = req.body.username ?? req.query.username;
  // TODO: NO DEBEMOS ENVIAR PASSWORD POR LA URL
  const password = req.body.password ? req.body.password : req.query.password;
  const email = req.body.email || req.query.email;

  if (username !== "Andrea" || password !== "123456") {
    return res.json({ message: "login fallido" });
  }
  console.log("🚀 ~ file: session.routes.js:13 ~ router.get ~ res:", res);

  req.session["user"] = username || userQuery;
  req.session.admin = true;
  req.session.email = email || emailQuery;
  return res.json({
    message: "login success",
  });
});

router.get("/logout", (req, res) => {
  req.session.destory((err) => {
    // dentro del metodo distroy hay un callback. Entonces, si existe un error oka, ya se ha eliminado(esto en el if) y el else le aviso al usuario que tipo de error es.
    if (!err) res.send("Logout ok!");
    else res.send({ status: "Logout ERROR", body: err });
  });
});
/*Notes: Para eliminar datos de una variable de session, se utiliza el parametro de request y el metodo distoy. Como parametro se pasa un callback */

router.get("/welcome", async (req, res) => {
  // /welcome?name = Andrea
  const { name } = req.query;
  console.log("🚀 ~ file: session.routes.js:29 ~ router.get ~ name:", name);

  const counter = req.session?.counter;
  if (!counter) {
    req.session.counter = 1;
    return res.send(`Te damos la bienvenida ${name}`);
  }

  req.session.user = name;
  req.session.admin = true;
  req.session.counter++;
  return res.send(`has ingresado ${name} exitosamente, unas ${req.session.counter} veces`);
});

module.exports = router;
