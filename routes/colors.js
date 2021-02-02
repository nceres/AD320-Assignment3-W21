const express = require('express');
const router = express.Router();

module.exports = router;

const colorsArray = require('../data/colors.json');

router.get('/', function(req, res) {
    res.header('Content-Type', 'application/json');
    res.status(200).send(colorsArray);
});

router.get('/:id', function(req, res) {
    res.header('Content-Type', 'application/json');
    res.status(200).send(colorsArray.find(element => element.id === Number(req.params.id)) || {});
});

module.exports = router;
