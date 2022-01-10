import express from "express";
import { editUser, remove, logout, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", editUser);
userRouter.get("/remove", remove);
userRouter.get("/logout", logout);
userRouter.get("/:id", see);

export default userRouter;
