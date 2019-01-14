import express from "express";
import userRouter from "./user";
import globalRouter from "./global";

const router = express.Router();

router.use("/", globalRouter);
router.use("/user", userRouter);

export default router;
