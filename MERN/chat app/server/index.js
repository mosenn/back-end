const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const connectToMongoDb = require("./config/dbConnect");
const app = express();
const data = require("./data");
app.use(express.json());
const notFoundRoutes = require("./middleware/controlRoutes");
const errorHandler = require("./middleware/errorHandel");

const router = require("./routes/user");
const chatRoute = require("./routes/chatRoutes");

app.use(cors());
// console.log(data);
dotEnv.config();
//* data base connection
connectToMongoDb();
//*accpet jason
app.use(express.json());

//*routes
app.use("/", router);
app.use("/", chatRoute);

//*send data from data.js to localhost
app.get("/", (req, res) => {
  return res.status(200).send(data);
});
//*middleware control route & handlerError
app.use(errorHandler);
app.use(notFoundRoutes);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is run at ${port}`.brightGreen.bold);
});
