export const recomends = (req, res) => {
  const videos = [
    {
      title: "Hello",
    },
    {
      title: "Video #2",
    },
    {
      title: "Whatsup",
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => res.render("watch");
export const edit = (req, res) => res.send("Edit Videos");
