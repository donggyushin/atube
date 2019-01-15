import express from "express";
import routes from "./routes";
import videos from "../controllers/video/videos";
import upload from "../controllers/video/upload";
import videoDetail from "../controllers/video/videoDetail";
import editVideo from "../controllers/video/editVideo";
import deleteVideo from "../controllers/video/deleteVideo";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail, videoDetail);

export default videoRouter;
