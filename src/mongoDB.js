import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/a-tube");

const db = mongoose.connection;

const handleError = error => {
  console.log(`❌  connection error: ${error}`);
};
const handleOpen = () => {
  console.log("✅   connected to the DB");
};

db.on("error", handleError);
db.once("open", handleOpen);
