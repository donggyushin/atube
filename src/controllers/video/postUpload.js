const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // To Do : Upload and save video
  res.redirect("/video/123123");
};

export default postUpload;
