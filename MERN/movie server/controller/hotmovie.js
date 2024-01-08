const hotMovieModel = require("../model/hotmovie");

const getHotmovie = async (req, res) => {
  try {
    const hotMovie = await hotMovieModel.find();
    // console.log(hotMovie);
    return res.status(200).json(hotMovie);
  } catch (err) {
    console.log("hot movie error", err);
  }
};

module.exports = {
  getHotmovie,
};
