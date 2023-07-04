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
  //Para poder ver esta parte del codigo debo colocar en el navegador http://localhost:5000/api/session/welcome?name=Andrea o despues de name el nombre que quiera
  const { name } = req.query;
  console.log("🚀 ~ file: session.routes.js:36 ~ router.get ~ name:", name);

  const counter = req.session?.counter; // Esto hace qu cuando coloque http://localhost:5000/api/session/welcome?name=Andrea en el navegador luego de que me de la bienvenida me muestre cada vez que habra una pestana nueva con ese URL las veces que he ingresado. EL mensage seria el que esta en el return return res.send(`has ingresado ${name} ej:"has ingresado Andrea exitosamente, unas 2 veces exitosamente, unas ${req.session.counter} veces`);"
  if (!counter) {
    req.session.counter = 1;
    return res.send(`Te damos la bienvenida ${name}`);
  }

  req.session.user = name; // esto es para verificar que el nombre sea el correspondiente
  req.session.admin = true; // esto es para verificar que sea el administrados
  req.session.counter++; // esto es para contar cuantas veces se ha logeado en una sesion
  return res.send(`has ingresado ${name} exitosamente, unas ${req.session.counter} veces`); //Este es el mensaje que devuelve con el nombre del usuario mas las veces que se ha conectado
});

module.exports = router;
