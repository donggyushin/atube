import express from "express";
import userRouter from "./user";
import globalRouter from "./global";
import videoRouter from "./video";
import routes from "./routes";
const router = express.Router();

router.use(routes.main, globalRouter);
router.use(routes.user, userRouter);
router.use(routes.video, videoRouter);

export default router;
