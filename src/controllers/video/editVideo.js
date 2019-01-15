const editVideo = (req, res) => {
  const {
    params: { id }
  } = req;
  const local = {
    pageTitle: "Edit video",
    id
  };
  res.render("routes/EditVideo/editVideo.ejs", local);
};
export default editVideo;
