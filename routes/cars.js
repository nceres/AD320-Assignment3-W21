const express = require('express');
const router = express.Router();

// require cars data
const cars = require('../data/cars.json');

// GET request for all JSON data
router.get('/', function(req, res, next) {
    res.json(cars);
  });

// GET request for specified id
router.get('/:id', function(req, res, next) {
    
    var searchVal = parseInt(req.params.id);
    var match = new Object();

    for (i = 0; i < cars.length; i++) {
        if (cars[i].id == searchVal) {
            match = cars[i];
        }
    }

    // check for empty object (no id match)
    // send matching JSON record or empty object
    if (Object.keys(match).length === 0) {
        res.status(200);
        res.json(match);
    } else {
        res.json(match);
    }
    
  });

module.exports = router;