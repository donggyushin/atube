import { videos } from "../../db";

const search = (req, res) => {
  const {
    query: { term: searchBy }
  } = req;
  const local = {
    pageTitle: "SEARCH",
    searchBy,
    videos
  };
  res.render("routes/Search/search.ejs", local);
};

export default search;
