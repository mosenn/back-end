const newMovieModel = require("../model/newmovie");

const getNemovie = async (req, res) => {
  try {
    const newMovie = await newMovieModel.find();
    // console.log(newMovie);
    return res.status(200).json(newMovie);
  } catch (err) {
    console.log("get new movie", err);
  }
};

module.exports = {
  getNemovie,
};
