import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(helmet());
app.use(jsonParser);
app.use(urlencodedParser);
app.use(cookieParser());

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
