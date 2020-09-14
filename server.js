const express = require('express');
// Express is a web application framework -it sits on top a Node web server module
// It is essentially React --> but backend
// ADDS EXTRA FUNTIONALITY
// Routing
// Middleware support
// A simple API


const showsRouter = require('./data/shows/showsRouter');
// Node just lets us run JS outside of a browswer - runtime environment

const charactersRouter = require('./data/characters/charactersRouters');
// Node just lets us run JS outside of a browswer - runtime environment

const helmet = require("helmet");
/* helment = middleware 
 middleware can change the request/response objects - but it doesn't have to 
 helmet adds headers for security to your request */

const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
    res.status(200).json({ message: "The server is online!" })
})

server.use("/api/shows", showsRouter)
server.use("/api/characters", charactersRouter)

module.exports =server;