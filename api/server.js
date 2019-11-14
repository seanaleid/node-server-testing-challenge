const express = require('express');

const Users = require("../users/users-model.js");

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: "up and running"});
});

server.get('/users', (req, res) => {
   Hobbits.getAll()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

module.exports = server;