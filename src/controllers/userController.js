export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = (req, res) => {
  console.log(req.body);
  res.end();
};
export const login = (req, res) => res.render("login", { pageTitle: "Log In" });
export const remove = (req, res) =>
  res.render("remove", { pageTitle: "Remove User" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Log Out" });
export const see = (req, res) => res.render("see", { pageTitle: "See" });
