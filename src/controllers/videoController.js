import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
  } catch (err) {
    return res.send(`Error -> ${err}`);
  }
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  const { id } = req.params;
  return res.render("upload", { pageTitle: `Uploading` });
};
export const postUpload = (req, res) => {
  const { id } = req.params;
  return res.redirect("/");
};
