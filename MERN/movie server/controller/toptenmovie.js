const topTenMovieModel = require("../model/toptenmovie");

const getTopTenMovie = async (req, res) => {
  try {
    const topTenMovie = await topTenMovieModel.find();
    // console.log(topTenMovie);
    return res.status(200).json(topTenMovie);
  } catch (err) {
    console.log("topTenMovie get error", err);
  }
};

module.exports = {
  getTopTenMovie,
};
