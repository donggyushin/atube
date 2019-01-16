import routes from "../../routes/routes";

const postJoin = (req, res) => {
  const local = {
    pageTitle: "JOIN"
  };

  const {
    body: { name, password, password2, email }
  } = req;

  if (password === password2) {
    // To Do : Register User
    // To Do : Log User In
    res.redirect(routes.home);
  } else {
    res.status(400);
    res.render("routes/Join/join.ejs", local);
  }
};

export default postJoin;
