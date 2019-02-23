import User from "./models/User";
import passport from "passport";
import GitHubStrategy from "passport-github2";
import { gitHubLoginCallBack } from "./controllers/user/githubLogin";
import routes from "./routes/routes";
import dotenv from "dotenv";
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

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
