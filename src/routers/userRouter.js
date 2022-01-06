import express from "express";

const userRouter = express.Router();

const handleEdit = (req, res) => res.send("유수정");
const handledelete = (req, res) => res.send("삭제");

userRouter.get("/edit", handleEdit);
userRouter.get("/delete", handledelete);

export default userRouter;
