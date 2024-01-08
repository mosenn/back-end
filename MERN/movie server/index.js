const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
require("dotenv").config({ path: "./config.env" });

const connectingToDatabase = require("./connection/db");

//* connect to data base
connectingToDatabase();
const port = process.env.PORT || 3000;

//*routes
app.use("/", require("./routes/movies"));
app.use("/", require("./routes/recomend"));
app.use("/", require("./routes/newmovie"));
app.use("/", require("./routes/hotmovie"));
app.use("/", require("./routes/toptenmovie"));
app.use("/", require("./routes/commentUsers"));
//*test route
app.get("/", (req, res) => {
  return res.send("this is movie server");
});
//*movie route

app.listen(port, () => {
  console.log(`server is connect ${port}`);
});
