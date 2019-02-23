import passport from "passport";
import routes from "../../routes/routes";
import User from "../../models/User";

export const facebookLogin = async (_, __, profile, cb) => {
  const { id, displayName, emails, photos } = profile;
  try {
    const user = await User.findOne({ facebookId: id });
    if (user) {
      user.facebookId = id;
      user.avataUrl = photos[0].value;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      name: displayName,
      email: emails[0].value,
      avataUrl: photos[0].value,
      facebookId: id
    });

    return cb(null, newUser);
  } catch (error) {
    return cb(error, null);
  }
};

export const getFacebookLogin = passport.authenticate("facebook", {
  scope: ["email"]
});

export const getFacebookLoginCallback = passport.authenticate("facebook", {
  failureRedirect: routes.login
});

export const getFacebookLoginCallback2 = (req, res) => {
  res.redirect(routes.home);
};
