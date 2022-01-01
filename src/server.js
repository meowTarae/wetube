import express from "express";

const app = express();

const handleListening = () => console.log("Make Sever 💖");

app.listen(5000, handleListening);
