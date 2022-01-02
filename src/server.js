import express from "express";
import morgan from "morgan";

const app = express();
const Port = 4000;

const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/users", handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/videos", handleWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`Sever listening on port http://localhost:${Port}`);

app.listen(Port, handleListening);
