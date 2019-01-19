import Video from "../../models/Video";

const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    const local = {
      pageTitle: "HOME",
      videos
    };
    res.render("routes/Home/home.ejs", local);
  } catch (error) {
    console.log(error);
    const local = {
      pageTitle: "HOME",
      videos: []
    };
    res.render("routes/Home/home.ejs", local);
  }
};

export default home;
