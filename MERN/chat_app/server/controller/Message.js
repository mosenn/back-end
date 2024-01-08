const Messagemodel = require("../model/Message");
const { sign, verify } = require("../tools/jwt");
const userMessage = async (req, res) => {
  try {
    const { userId } = req.params;
    const message = await Messagemodel.find().sort({ createdAt: 1 });
    return res.status(200).json(message);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = {
  userMessage,
};
