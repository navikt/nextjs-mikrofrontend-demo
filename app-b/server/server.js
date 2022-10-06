const express = require("express");
const cors = require("cors");
const path = require("path");
const basePath = "/app-b";
const buildPath = path.resolve(__dirname, "../dist");
const server = express();

server.use(cors({ origin: "http://localhost:3000" }));

server.use((req, res, next) => {
  res.set('Cache-Control', 'no-cache');
  next();
})

server.use(basePath, express.static(buildPath));

server.listen(7200, () => console.log("Server listening on port 7200"));
