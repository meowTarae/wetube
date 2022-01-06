import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Here is home");

globalRouter.get("/", handleHome);

export default globalRouter;
