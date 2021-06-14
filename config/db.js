const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");
const connectDB = async (req, res) => {
  try {
    await mongoose.connect(db, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};
module.exports = connectDB;
