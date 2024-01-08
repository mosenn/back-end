
const recomendModel = require("../model/recomend");

const getRecomend = async (req, res) => {
  try {
    console.log(recomendModel);
    const recomend = await recomendModel.find();
    // console.log(recomend);
    return res.status(200).json(recomend);
  } catch (err) {
    console.log("recomend get error", err);
  }
};

module.exports = {
  getRecomend,
};
