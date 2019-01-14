import express from "express";
import { handleHomeControler } from "../controllers/global";
import routes from "./routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, handleHomeControler);
globalRouter.post(routes.join, handleHomeControler);
globalRouter.post(routes.logout, handleHomeControler);
globalRouter.post(routes.login, handleHomeControler);
globalRouter.get(routes.search, handleHomeControler);

export default globalRouter;
