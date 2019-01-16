import express from "express";

import routes from "./routes";
import home from "../controllers/global/home";
import join from "../controllers/global/join";
import logout from "../controllers/global/logout";
import login from "../controllers/global/login";
import search from "../controllers/global/search";
import postJoin from "../controllers/global/postJoin";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, join);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.login, login);
globalRouter.get(routes.search, search);

export default globalRouter;
