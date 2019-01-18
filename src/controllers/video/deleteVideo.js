import routes from "../../routes/routes";
import Video from "../../models/Video";

const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {}
  res.redirect(routes.home);
};

export default deleteVideo;
