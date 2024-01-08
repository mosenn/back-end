const path = require("path");
const express = require("express");

exports.static = (app) => {
  app.use(express.static(path.join(__dirname, "..", "public")));
};
