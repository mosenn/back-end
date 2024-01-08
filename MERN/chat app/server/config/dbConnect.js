const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connectToMongoDb = async () => {
  try {
    const connectdb = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `mongodb connect ${connectdb.connection.host}`.cyan.brightCyan.bold.underline
    );
  } catch (err) {
    console.log(err.message, "cant connect to mongodb");
    process.exit(1);
  }
};

module.exports = connectToMongoDb;
