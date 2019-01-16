import { videos } from "../../db";

const home = (req, res) => {
  const local = {
    pageTitle: "HOME",
    videos
  };

  res.render("routes/Home/home.ejs", local);
};

export default home;
