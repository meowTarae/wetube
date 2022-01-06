import express from "express";
import { recomends, watch, edit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watch);
videoRouter.get("/watch", edit);

export default videoRouter;
