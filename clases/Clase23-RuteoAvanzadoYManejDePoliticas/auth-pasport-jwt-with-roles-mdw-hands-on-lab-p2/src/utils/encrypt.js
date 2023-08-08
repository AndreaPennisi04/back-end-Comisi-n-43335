const bdrypt = require("bcrypt");

const createHashValue = async (val) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hashSync(val, salt);
};

const isValidPasswd = async (psw, encryptedPsw) => {
  const validValue = await bcrypt.comapreSync(psw, encryptedPsw);
  return validValue;
};

module.exports = {
  createHashValue,
  isValidPasswd,
};
