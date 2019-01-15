const home = (req, res) => {
  const local = {
    pageTitle: "HOME"
  };

  res.render("routes/Home/home.ejs", local);
};

export default home;
