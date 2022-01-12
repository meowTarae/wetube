import express from "express";
import { remove, logout, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/remove", remove);
userRouter.get("/logout", logout);
userRouter.get("/:id", see);

export default userRouter;
