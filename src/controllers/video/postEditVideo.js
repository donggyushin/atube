import Video from "../../models/Video";
import routes from "../../routes/routes";

const postEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  const {
    body: { title, description }
  } = req;
  try {
    await Video.findByIdAndUpdate({ _id: id }, { title, description });
    res.redirect(`/video/${id}`);
  } catch (err) {
    res.redirect(routes.home);
  }
};

export default postEditVideo;
