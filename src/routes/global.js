import express from "express";

import routes from "./routes";
import home from "../controllers/global/home";
import join from "../controllers/global/join";
import logout from "../controllers/global/logout";
import login from "../controllers/global/login";
import search from "../controllers/global/search";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.post(routes.join, join);
globalRouter.post(routes.logout, logout);
globalRouter.post(routes.login, login);
globalRouter.get(routes.search, search);

export default globalRouter;
