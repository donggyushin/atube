import routes from "./routes/routes";

export const localVariables = (req, res, next) => {
  res.locals.routes = routes;
  next();
};
