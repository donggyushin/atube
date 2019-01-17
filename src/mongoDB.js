import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongooseURL = process.env.MONGO_URL;

mongoose.connect(
  mongooseURL,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;

const handleError = error => {
  console.log(`❌  connection error: ${error}`);
};
const handleOpen = () => {
  console.log("✅   connected to the DB");
};

db.on("error", handleError);
db.once("open", handleOpen);
