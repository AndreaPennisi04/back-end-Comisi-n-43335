const authMdw = (req, res, next) => {
  if (req.session?.user) {
    return next();
  }

  return res.redirect("/loging");
};

module.exports = authMdw;
