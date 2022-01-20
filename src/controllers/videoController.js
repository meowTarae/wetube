import Video from "../models/Video";

export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export const watch = (req, res) => {
  const { id } = req.params;

  return res.render("watch", { pageTitle: `Watching: ${video.title}` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
};

export const postEdit = (req, res) => {
  const { id } = req.params;
};

export const getUpload = (req, res) => {
  const { id } = req.params;
};
export const postUpload = (req, res) => {
  const { id } = req.params;
};
