const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const server = http.createServer(app);
const PORT = 4000;
app.use(express.static(path.join(__dirname, 'public')));
server.listen(PORT, () => "Servidor online na porta " + PORT);