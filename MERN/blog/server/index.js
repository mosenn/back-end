const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectToDb = require("./connection/db");
require("dotenv").config({ path: "./config.env" });
const app = express();
//*parser
app.use(bodyParser.json());
app.use(cookieParser());
//*cors
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
//*mongod db connection
connectToDb();
//* routes
app.use("/home", async (req, res) => {
  res.status(200).send("server is ok");
});

app.use("/", require("./routes/user"));
app.use("/", require("./routes/post"));
app.use("/", require("./routes/comment"));
app.use("/", require("./routes/userInteraction"));
//*listen
const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`server is connectin http://localhost:${port}`);
});
