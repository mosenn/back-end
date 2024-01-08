const jwt = require("jsonwebtoken");

const sign = (id, username) => {
  return jwt.sign({ userId: id, name: username }, "secret");
};
const verify = (token, secret) => {
  return jwt.verify(token, secret);
};
module.exports = {
  sign,
  verify,
};
