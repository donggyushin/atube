import routes from "./routes/routes";

export const localVariables = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};
