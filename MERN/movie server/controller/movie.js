const movieModel = require("../model/movie");
const animationSeriModel = require("../model/animationSeris");

const allMovies = async (req, res) => {
  try {
    const movies = await movieModel.find();
    return res.status(200).send(movies);
  } catch (err) {
    console.log(err, "in animate allmovies controller get");
    return res.status(500).send(err, "someting worng for sever");
  }
};

const animations = async (req, res) => {
  try {
    const animations = await animationSeriModel.find();
    return res.status(200).send(animations);
  } catch (err) {
    console.log(err, "in animate controller get");
    return res.status(500).send(err, "someting worng for sever");
  }
};


module.exports = { allMovies, animations };
