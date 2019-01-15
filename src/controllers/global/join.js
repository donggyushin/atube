const join = (req, res) => {
  const local = {
    pageTitle: "JOIN"
  };
  res.render("routes/Join/join.ejs", local);
};

export default join;
