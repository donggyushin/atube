import routes from "../../routes/routes";
import passport from "passport";

const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export default postLogin;
