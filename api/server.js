const express = require('express');

const userRouter = require("../users/userRouter.js");

const server = express();

server.use(express.json());


server.get('/', (req, res) => {
    res.status(200).json({ message: "up and running"});
});


server.use('/api', userRouter);


module.exports = server;