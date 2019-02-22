import routes from "./routes/routes";
import multer from "multer";
const upload = multer({ dest: "uploads/videos/" });

export const localVariables = (req, res, next) => {
  res.locals.siteName = "Atube";
  res.locals.routes = routes;
  res.locals.user = req.user || null;

  next();
};

export const singleVideoMiddleware = upload.single("file");
