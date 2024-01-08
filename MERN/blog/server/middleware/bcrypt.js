const bcrypt = require("bcryptjs");

const hash = async (password, ConfirmPassword) => {
  if (password) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const hashConfirmPassword = await bcrypt.hash(ConfirmPassword, salt);
    return {
      hashPassword,
      hashConfirmPassword,
    };
  }
};

const compare = async (reqPassowrd, dbPassword) => {
  return await bcrypt.compare(reqPassowrd, dbPassword);
};

module.exports = {
  hash,
  compare,
};
