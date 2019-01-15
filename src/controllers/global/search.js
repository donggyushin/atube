const search = (req, res) => {
  const {
    query: { term: searchBy }
  } = req;
  const local = {
    pageTitle: "SEARCH",
    searchBy
  };
  res.render("routes/Search/search.ejs", local);
};

export default search;
