import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import Router from "./routes/index";

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(jsonParser);
app.use(urlencodedParser);
app.use(cookieParser());
app.use("/", Router);

// set the view engine to ejs
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

export default app;
