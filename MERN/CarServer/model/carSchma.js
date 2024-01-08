const mongoose = require("mongoose");
const carModel = mongoose.model(
  "cars",
  new mongoose.Schema({
    id: {
      type: Number,
      required: true,
    },
    sort: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    typeCar: {
      type: String,
      required: true,
    },
    fuel: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    fav: {
      type: Boolean,
      required: true,
    },
    img: {
      type: String,
    },
    caption: {
      type: String,
      required: true,
    },
    reviewer: {
      type: Number,
      required: true,
    },
    views: {
      type: Object,
      required: true,
    },
    reviews: {
      type: Object,
      required: true,
    },
  })
);

exports.carsModel = carModel;
