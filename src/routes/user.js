import express from "express";

const userRouter = express.Router();

const handleUserRoute = (req, res) => {
  res.send("user");
};
userRouter.get("/", handleUserRoute);

export default userRouter;
