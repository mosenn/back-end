const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { static } = require("./path/path");
const app = express();

app.use(bodyParser.json());
// cors
app.use(cors());
// const carRoute = require("./router/car");
// const page404 = require("./router/404");
app.get("/", (req, res) => {
  return res.status(200).send("hellow this test for vercel");
});
// routes
// app.use("/cars", carRoute);
// app.use(page404);

// mongoose.set("strictQuery", false);

// mongoose
//   .connect(
//     "mongodb+srv://mnazgul:qse8313656@cluster0.zutazhf.mongodb.net/carDatabase"
//   )
//   .then(() => {
//     console.log("data base is conect");
//   })
//   .catch((err) => console.log("someting wrong", err));

// acesse
static(app);

// view ejs
app.set("view engine", "ejs");
app.set("views", "view");

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`local server is runing at ${port}`);
});
