import routes from "../../routes/routes";
import User from "../../models/User";

const postJoin = async (req, res, next) => {
  const local = {
    pageTitle: "JOIN"
  };

  const {
    body: { name, password, password2, email }
  } = req;

  if (password === password2) {
    // To Do : Register User

    try {
      const user = await User({
        name,
        email
      });

      await User.register(user, password);
      // To Do : Log User In
      next();
    } catch (err) {
      console.log(err);
      res.redirect(routes.home);
    }
  } else {
    res.status(400);
    res.render("routes/Join/join.ejs", local);
  }
};

export default postJoin;
