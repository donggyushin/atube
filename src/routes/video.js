import express from "express";
import routes from "./routes";
import videos from "../controllers/video/videos";
import upload from "../controllers/video/upload";
import videoDetail from "../controllers/video/videoDetail";
import editVideo from "../controllers/video/editVideo";
import deleteVideo from "../controllers/video/deleteVideo";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.post(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.put(routes.editVideo, editVideo);
videoRouter.delete(routes.deleteVideo, deleteVideo);

export default videoRouter;
