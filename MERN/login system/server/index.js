const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const connecetToDb = require("./connection/db");
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(bodyParser.json());
// cors
app.use(cors());
// const carRoute = require("./router/car");
// const page404 = require("./router/404");

//*data base connection
connecetToDb();

//*test route for see message on depoly vercel
// app.get("/", (req, res) => {
//   return res.status(200).send("server is success depoly on vercel");
// });

//*worked
app.use("/", require("./routes/githubAcessToken"));
app.use("/", require("./routes/userLoginAndRegister"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`local server is runing at ${port}`);
});
