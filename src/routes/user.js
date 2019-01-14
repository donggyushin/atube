import express from "express";
import { handleUserContoller } from "../controllers/user";
import routes from "./routes";

const userRouter = express.Router();

userRouter.get(routes.users, handleUserContoller);
userRouter.get(routes.userDetail, handleUserContoller);
userRouter.put(routes.editProfile, handleUserContoller);
userRouter.put(routes.changePassword, handleUserContoller);

export default userRouter;
