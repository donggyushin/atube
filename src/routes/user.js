import express from "express";
import { handleUserContoller } from "../controllers/user";

const userRouter = express.Router();

userRouter.get("/", handleUserContoller);

export default userRouter;
