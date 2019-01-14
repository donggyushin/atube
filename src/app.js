import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import Router from "./routes/index";

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(jsonParser);
app.use(urlencodedParser);
app.use(cookieParser());
app.use("/", Router);

export default app;
