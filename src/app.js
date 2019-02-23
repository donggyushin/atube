import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import Router from "./routes/index";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import { localVariables } from "./middlewares";
import dotenv from "dotenv";
dotenv.config();
import "./passport";

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const CookieStore = MongoStore(session);

const app = express();

console.log(process.env.SESSION_SECRET_KEY);

app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser());
app.use(jsonParser);
app.use(urlencodedParser);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(localVariables);

//routing
app.use("/", Router);

// set the view engine to ejs
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

export default app;
