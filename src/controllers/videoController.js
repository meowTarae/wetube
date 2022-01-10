export const recomends = (req, res) => {
  const videos = [
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
  return res.render("home", { pageTitle: "Home", videos });
}; // ✔
export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" }); // ✔
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" }); // ✔
export const see = (req, res) => {
  return res.render("watch", {
    pageTitle: "Watch",
    videoId: `${req.params.id}`,
  });
}; // ✔
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit" }); // ✔
export const deleteVideo = (req, res) =>
  res.render("delete", { pageTitle: "Delete Video" }); // ✔
