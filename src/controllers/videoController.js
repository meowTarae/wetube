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
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.send("Edit Videos");
export const deleteVideo = (req, res) => res.send("Delete Video");
