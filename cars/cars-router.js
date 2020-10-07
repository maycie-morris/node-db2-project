const express = require('express');
const Car = require('./carsDb')
const router = express.Router();


router.get('/', (req, res) => {
    Car.find(req.query)
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            })
        })
});

router.get('/:id', (req, res) => {
    Car.findById(req.params.id)
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err.message
            })
        })
});

router.post('/', (req, res) => {
    const data = req.body;

    Car.insert(data)
        .then(cars => {
            res.status(201).json(cars)
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            })
        })
})


module.exports = router;