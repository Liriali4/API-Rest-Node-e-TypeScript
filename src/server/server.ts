import express from "express";

const server = express();

interface teste{
    
}

server.get("/", (_req, res) => {
    res.send("API rodando 🚀");
});

export default server;
