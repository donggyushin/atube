import express from "express";
import routes from "./routes";
import { handleVideoController } from "../controllers/video";

const videoRouter = express.Router();

videoRouter.get(routes.videos, handleVideoController);
videoRouter.post(routes.upload, handleVideoController);
videoRouter.get(routes.videoDetail, handleVideoController);
videoRouter.put(routes.editVideo, handleVideoController);
videoRouter.delete(routes.deleteVideo, handleVideoController);

export default videoRouter;
