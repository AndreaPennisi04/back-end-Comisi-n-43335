const authMdw = (req, res, next) => {
  console.log("🚀 ~ file: auth.middleware.js:2 ~ authMddw ~ req, res, next:", req, res, next);
  if (req.session?.user === "Andrea" || req.session?.admin) {
    return next();
  }
  return res.status(401).json({
    menssage: "Unauthorized access",
  });
};

module.exports = authMdw;
