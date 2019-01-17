import Video from "../../models/Video";
import routes from "../../routes/routes";

const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    console.log(video);
    res.render("routes/VideoDetail/videoDetail.ejs", { video });
  } catch (err) {
    res.redirect(routes.home);
  }
};

export default videoDetail;
