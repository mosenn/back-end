const bcrypt = require("bcryptjs");


const hash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  //   console.log(password, "pw befor hash");
  return (password = await bcrypt.hash(password, salt));
  //   console.log(password, "pw after hash");
};

const compare = async (rqPassword, dbPassword) => {
  return await bcrypt.compare(rqPassword, dbPassword);
};

module.exports = {
  hash,
  compare,
};
