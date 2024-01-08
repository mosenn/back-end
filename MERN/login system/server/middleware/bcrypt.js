const bcrypt = require("bcryptjs");

const hash = async (password, confirmPassword) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const hashConfirmPassword = await bcrypt.hash(confirmPassword, salt);
  return {
    hashPassword,
    hashConfirmPassword,
  };
};

const compare = async (reqPassword, dbPassword) => {
  return await bcrypt.compare(reqPassword, dbPassword);
};
module.exports = {
  hash,
  compare,
};
