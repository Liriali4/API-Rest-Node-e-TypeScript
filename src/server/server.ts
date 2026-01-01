import express from "express";

const server = express();

server.get("/", (_req, res) => {
  res.send("API rodando 🚀");
});

export default server;
