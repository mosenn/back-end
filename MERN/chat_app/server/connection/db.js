const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/config.env" });

mongoose.set("strictQuery", false);
const connectionToDb = async () => {
  // console.log(process.env.DATA_BASE_URL , 'in dbjs')
  try {
    const db = await mongoose.connect(process.env.DATA_BASE_URL);
    console.log(`db is connect ${db.connection.host}`);
  } catch (err) {
    console.log(err, "someting worng");
    process.exit(1);
  }
};

module.exports = connectionToDb;
