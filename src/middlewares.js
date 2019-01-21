import routes from "./routes/routes";
import multer from "multer";
const upload = multer({ dest: "uploads/videos/" });

export const localVariables = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 1
  };
  next();
};

export const singleVideoMiddleware = upload.single("file");
