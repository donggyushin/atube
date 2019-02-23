import express from "express";

import routes from "./routes";
import home from "../controllers/global/home";
import join from "../controllers/global/join";
import logout from "../controllers/global/logout";
import login from "../controllers/global/login";
import search from "../controllers/global/search";
import postJoin from "../controllers/global/postJoin";
import postLogin from "../controllers/global/postLogin";
import { onlyPublic } from "../middlewares";
import {
  gitHubLogin,
  gitHubLogin2,
  gitHubLogin2CallBack
} from "../controllers/user/githubLogin";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, onlyPublic, join);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin, (req, res) => {
  console.log(req.user);
  res.redirect(routes.home);
});

globalRouter.get(routes.login, onlyPublic, login);
globalRouter.post(routes.login, onlyPublic, postLogin, (req, res) => {
  console.log(req.user);
  res.redirect(routes.home);
});

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.gitHub, gitHubLogin);
globalRouter.get(routes.gitHubCallback, gitHubLogin2, gitHubLogin2CallBack);

export default globalRouter;
