import express from "express";
const app = express();
const PORT = 3000;

const middlewareTestFN = (req, res, next) => {
  console.log("middleware");
  next();
};
app.use(middlewareTestFN);

const handleListening = port => {
  console.log(`A-tube app listening on port ${port}`);
};

const handleHomeRoute = (req, res) => {
  console.log("Home");
  res.send("Home");
};
app.get("/", handleHomeRoute);
const handleTestRoute = (req, res) => {
  console.log("Test");
  res.send("Test");
};
app.get("/test", handleTestRoute);

app.listen(PORT, handleListening(PORT));
