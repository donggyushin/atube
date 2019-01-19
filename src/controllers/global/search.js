import Video from "../../models/Video";
const search = async (req, res) => {
  const {
    query: { term: searchBy }
  } = req;
  let videos = [];
  const local = {
    pageTitle: "SEARCH",
    searchBy,
    videos
  };
  try {
    videos = await Video.find({ title: { $regex: searchBy, $options: "i" } });
    local.videos = videos;
    res.render("routes/Search/search.ejs", local);
  } catch (error) {
    console.log(error);
    res.render("routes/Search/search.ejs", local);
  }
};

export default search;
