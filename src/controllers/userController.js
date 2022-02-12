import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { name, username, email, password, location } = req.body;
  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect("/login");
};
export const login = (req, res) => res.render("login", { pageTitle: "Log In" });
export const remove = (req, res) =>
  res.render("remove", { pageTitle: "Remove User" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Log Out" });
export const see = (req, res) => res.render("see", { pageTitle: "See" });
