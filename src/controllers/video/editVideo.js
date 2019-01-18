import Video from "../../models/Video";
import routes from "../../routes/routes";

const editVideo = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const video = await Video.findById(id);
    const local = {
      pageTitle: `Edit ${video.title}`,
      id,
      video
    };
    res.render("routes/EditVideo/editVideo.ejs", local);
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export default editVideo;
