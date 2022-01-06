import express from "express";
import { join } from "../controllers/userController";
import { recomends } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/join", join);
globalRouter.get("/", recomends);

export default globalRouter;
