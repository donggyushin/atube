import express from "express";

import routes from "./routes";
import { userTestController } from "../controllers/user/test";

const userRouter = express.Router();

userRouter.get(routes.users, userTestController);
userRouter.get(routes.userDetail, userTestController);
userRouter.put(routes.editProfile, userTestController);
userRouter.put(routes.changePassword, userTestController);

export default userRouter;
