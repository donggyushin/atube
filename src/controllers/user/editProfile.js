const editProfile = (req, res) => {
  const local = {
    pageTitle: "Edit-profile"
  };
  res.render("routes/EditProfile/editProfile.ejs", local);
};

export default editProfile;
