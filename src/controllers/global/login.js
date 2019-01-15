const login = (req, res) => {
  const local = {
    pageTitle: "Login"
  };
  res.render("routes/Login/login.ejs", local);
};

export default login;
