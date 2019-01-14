import express from "express";
import { handleHomeControler } from "../controllers/global";

const globalRouter = express.Router();

globalRouter.get("/", handleHomeControler);

export default globalRouter;
