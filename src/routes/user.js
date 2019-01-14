import express from "express";

import routes from "./routes";
import users from "../controllers/user/users";
import userDetail from "../controllers/user/userDetail";
import editProfile from "../controllers/user/editProfile";
import changePassword from "../controllers/user/changePassword";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
