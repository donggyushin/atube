import User from "../../models/User";

const userDetail = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const foundUser = await User.findById(id);

    res.render("routes/UserDetail/userDetail.ejs", { foundUser: foundUser });
  } catch (error) {
    console.log(error);
    res.render("routes/Home/home.ejs");
  }
};

export default userDetail;
