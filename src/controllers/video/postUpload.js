import Video from "../../models/Video";

const postUpload = async (req, res) => {
  const {
    body: { title, description }
  } = req;
  const {
    file: { path }
  } = req;

  const newVideo = new Video({ title, description, fileURL: path });
  await newVideo.save(err => {
    if (err) {
      console.log(err);
    }
  });

  const videoId = newVideo._id;

  // To Do : Upload and save video
  res.redirect(`/video/${videoId}`);
};

export default postUpload;
