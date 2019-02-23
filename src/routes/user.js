import express from "express";

import routes from "./routes";
import users from "../controllers/user/users";
import userDetail from "../controllers/user/userDetail";
import editProfile from "../controllers/user/editProfile";
import changePassword from "../controllers/user/changePassword";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;
