const { Router } = require("express");
const { find } = require("../model/user.model");
const userModel = require("../model/user.model");
const { createHashValue, isValidPasswd } = require("../utils/encrypt");

const router = Router();

router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (!err) return res.redirect("/login");
    return res.send({ message: `logout Error`, body: err });
  });
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await userModel.findOne({ email });
    console.log("🚀 ~ file: session.routes.js:19 ~ router.post ~ findUser:", findUser);

    if (!findUser) {
      return res.status(401).json({ message: `este usuario no esta registrado` });
    }
    const isValidComparePsw = await isValidPasswd(password, findUser.password);
    console.log("🚀 ~ file: session.routes.js:25 ~ router.post ~ isValidComparePsw:", isValidComparePsw);
    if (!isValidComparePsw) {
      return res.status(401).json({
        message: `las credenciales son erroneas, por favor reviselas`,
      });
    }

    req.session.user = {
      ...findUser,
    };

    return res.render("profile", {
      last_name: req.session?.user?.last_name || findUser.last_name,
      email: req.session?.user?.email || email,
      age: req.session?.user?.age || findUser.age,
    });
  } catch (error) {
    console.log("🚀 ~ file: session.routes.js:23 ~ router.post ~ error:", error);
  }
});

//Post register
router.post("/register", async (req, res) => {
  try {
    console.log("BODY ****", req.body);
    const { first_name, last_name, email, age, password } = req.body;

    const pswHashed = await createHashValue(password);
    console.log("🚀 ~ file: session.routes.js:51 ~ router.post ~ pswHashed:", pswHashed);

    const userAdd = {
      email,
      password,
      first_name,
      last_name,
      age,
      password: pswHashed,
    };
    const newUser = await userModel.create(userAdd);
    console.log("🚀 ~ file: session.routes.js:61 ~ router.post ~ newUser:", newUser);

    req.session.user = { email, first_name, last_name, age };
    return res.render(`login`);
  } catch (error) {
    console.log("🚀 ~ file: session.routes.js:69 ~ router.post ~ error:", error);
  }
});

//Post recover
router.post("/recover-psw", async (req, res) => {
  try {
    console.log("BODY UPDATE****", req.body);
    const { new_password, email } = req.body; // aca se hace la logica de poder poner la nueva contrasena junto con un unique que es el email  lo que hace que se pueda recuperar la contrasena

    const newPswHashed = await createHashValue(new_password);
    const user = await userModel.findOne({ email });

    if (!user) {
      // esto es importante CODIGO 401 UNATHORIZED se debe colocar si o si
      return res.status(401).json({ message: `credenciales invalidas o erroneas` });
    }

    const updateUser = await userModel.findByIdAndUpdate(user._id, {
      //user._id,:aca con el id de usuario que genera mongo
      password: newPswHashed, // aca el campo nuevo que se genera hace que newPswHashed lo pise y guarde la nueva contrasena
    });

    if (!updateUser) {
      // esta linea hace que una vez que se recupere la contrasena, se pueda actualizar, lo sobrescribe
      return res.json({ message: "problemas actualizando la contrasena" });
    }

    return res.render(`login`); // esto es para que se pueda loguear ya que la contraserna fue recuperada
  } catch (error) {
    console.log("🚀 ~ file: session.routes.js:98 ~ router.post ~ error:", error);
  }
});

module.exports = router;
