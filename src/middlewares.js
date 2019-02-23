import routes from "./routes/routes";
import multer from "multer";
const upload = multer({ dest: "uploads/videos/" });

export const localVariables = (req, res, next) => {
  res.locals.siteName = "Atube";
  res.locals.routes = routes;
  res.locals.loggedInUser = req.user || null;

  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const singleVideoMiddleware = upload.single("file");
