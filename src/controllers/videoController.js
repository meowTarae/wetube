let videos = [
  {
    title: "Movie A",
    rating: 5,
    comments: 1,
    createdAt: "1 minutes ago",
    views: 100,
    id: 1,
  },
  {
    title: "Movie B",
    rating: 4,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 200,
    id: 2,
  },
  {
    title: "Movie C",
    rating: 4.5,
    comments: 3,
    createdAt: "3 minutes ago",
    views: 300,
    id: 3,
  },
];

export const recomends = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const see = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}` });
};
export const editVideo = (req, res) =>
  res.render("editvideo", { pageTitle: "Edit" });
export const deleteVideo = (req, res) =>
  res.render("delete", { pageTitle: "Delete Video" });
