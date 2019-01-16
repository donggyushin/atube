import routes from "../../routes/routes";
const logout = (req, res) => {
  // To Do : Log user out process
  res.redirect(routes.home);
};

export default logout;
