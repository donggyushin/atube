import express from "express";
import routes from "./routes";
import videos from "../controllers/video/videos";
import upload from "../controllers/video/upload";
import videoDetail from "../controllers/video/videoDetail";
import editVideo from "../controllers/video/editVideo";
import deleteVideo from "../controllers/video/deleteVideo";
import postUpload from "../controllers/video/postUpload";
import { singleVideoMiddleware, onlyPrivate } from "../middlewares";
import postEditVideo from "../controllers/video/postEditVideo";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);

videoRouter.get(routes.upload, onlyPrivate, upload);
videoRouter.post(routes.upload, onlyPrivate, singleVideoMiddleware, postUpload);

videoRouter.get(routes.editVideo, onlyPrivate, editVideo);
videoRouter.post(routes.editVideo, onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo, onlyPrivate, deleteVideo);

videoRouter.get(routes.videoDetail, videoDetail);

export default videoRouter;
