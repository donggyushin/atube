import User from "./models/User";
import passport from "passport";
import GitHubStrategy from "passport-github2";
import FacebookStrategy from "passport-facebook";
import { gitHubLoginCallBack } from "./controllers/user/githubLogin";
import routes from "./routes/routes";
import dotenv from "dotenv";
import { facebookLogin } from "./controllers/user/facebookLogin";
dotenv.config();

passport.use(User.createStrategy());

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `http://127.0.0.1:3000${routes.gitHubCallback}`
    },
    gitHubLoginCallBack
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_SECRET_ID,
      callbackURL: "http://localhost:3000/auth/facebook/callback",
      profileFields: ["id", "displayName", "photos", "email"]
    },
    facebookLogin
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
