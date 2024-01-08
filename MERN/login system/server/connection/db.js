const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connecetToDb = async () => {
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.zutazhf.mongodb.net/loginSystem`
    );

    console.log(`db is connect at ${connect.connection.host}`);
  } catch (err) {
    console.log(err, "ERROR IS GENERATE BUY ME DB CANT CONNECT");
    console.log(err.message, "data base cant connect");
    process.exit(1);
  }
};

module.exports = connecetToDb;
