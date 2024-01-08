const page404 = (req, res) => {
  res.status(404).render("404page.ejs", { pagetitle: "404" });
};

module.exports = page404;
