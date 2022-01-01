import express from "express";

const app = express();
const Port = 4000;

const handleListening = () =>
  console.log(`Sever listening on port http://localhost:${Port}`);

app.listen(Port, handleListening);
