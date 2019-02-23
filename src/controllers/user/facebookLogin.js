import passport from "passport";
import routes from "../../routes/routes";

export const facebookLogin = (_, __, profile, cd) => {
  console.log(profile);
};

export const getFacebookLogin = passport.authenticate("facebook");

export const getFacebookLoginCallback = passport.authenticate("facebook", {
  failureRedirect: routes.login
});

export const getFacebookLoginCallback2 = (req, res) => {
  res.redirect(routes.home);
};
