import express from "express";
import morgan from "morgan";

const app = express();
const Port = 4000;

const logger = morgan("dev");

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed !</h1>");
  }
  console.log("Allowed url");
  next();
};

const handleHome = (req, res) => {
  return res.send("Hi");
};

const handleProtected = (req, res) => {
  return res.send("Protected lounge.");
};

app.use(logger);
app.use(privateMiddleware);

app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Sever listening on port http://localhost:${Port}`);

app.listen(Port, handleListening);
