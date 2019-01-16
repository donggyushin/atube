import routes from "../../routes/routes";

const postLogin = (req, res) => {
  const {
    body: { email, password }
  } = req;
  console.log(email);
  console.log(password);

  // To Do : Verify user password

  // To Do : user authentication

  res.redirect(routes.home);
};

export default postLogin;
