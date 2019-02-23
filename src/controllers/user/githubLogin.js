import passport from "passport";
import routes from "../../routes/routes";
import User from "../../models/User";

export const gitHubLoginCallBack = async (_, __, profile, done) => {
  const {
    _json: { id, avatar_url, name, email }
  } = profile;
  if (!email) {
    done(null, null);
  }
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.email = email;
      user.avataUrl = avatar_url;
      user.save();

      return done(null, user);
    } else {
      const newUser = await User.create({
        name,
        email,
        avataUrl: avatar_url,
        githubId: id
      });
      return done(null, newUser);
    }
  } catch (err) {
    return done(err, null);
  }
};

export const gitHubLogin = passport.authenticate("github", {
  scope: ["user:email"]
});
export const gitHubLogin2 = passport.authenticate("github", {
  failureRedirect: routes.home
});
export const gitHubLogin2CallBack = (req, res) => {
  // Successful authentication, redirect home.
  res.redirect(routes.home);
};
