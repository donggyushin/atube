import express from "express";

import routes from "./routes";
import { globalTest } from "../controllers/global/test";

const globalRouter = express.Router();

globalRouter.get(routes.home, globalTest);
globalRouter.post(routes.join, globalTest);
globalRouter.post(routes.logout, globalTest);
globalRouter.post(routes.login, globalTest);
globalRouter.get(routes.search, globalTest);

export default globalRouter;
