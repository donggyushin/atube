import express from "express";
import userRouter from "./user";
import globalRouter from "./global";
import videoRouter from "./video";
const router = express.Router();

router.use("/", globalRouter);
router.use("/user", userRouter);
router.use("/video", videoRouter);

export default router;
