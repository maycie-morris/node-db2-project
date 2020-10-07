const express = require('express');
const helmet = require('helmet');

const CarsRouter = require('../cars/cars-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/cars', CarsRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        Hello: `From today's Project!`
    })
});


module.exports = server;