const mongoose = require("mongoose");

const connectToDataBase = async () => {
  try {
    const connect = await mongoose.connect(process.env.URL_DATABASE);
    console.log(`data base is connected at ${connect.connection.host}`);
  } catch (err) {
    console.log("someting worng data base is can't connect ", err);
    process.exit(1);
  }
};

module.exports = connectToDataBase;
