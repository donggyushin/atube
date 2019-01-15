const changePassword = (req, res) => {
  const local = {
    pageTitle: "update password"
  };
  res.render("routes/ChangePassword/changePassword.ejs", local);
};

export default changePassword;
