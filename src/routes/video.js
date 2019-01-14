import express from "express";
import routes from "./routes";
import { videoTestController } from "../controllers/video/test";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videoTestController);
videoRouter.post(routes.upload, videoTestController);
videoRouter.get(routes.videoDetail, videoTestController);
videoRouter.put(routes.editVideo, videoTestController);
videoRouter.delete(routes.deleteVideo, videoTestController);

export default videoRouter;
