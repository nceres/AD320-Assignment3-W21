const express = require('express');
const router = express.Router();
const cities = require('../data/cities.json');



router.get('/', function(req, res, next) {
    res.json("localhost:3000/cities")
});
//define route parameter (:/id)
router.get('/:id', function(req, res, next) {
    let reqId = req.params.id;
    let responseObject = {}
    cities.forEach(function(element) {
        if (element.id == reqId) {
            responseObject = element;
        } else {
            // id not found
            res.status(200);
        }
    })
    res.json(responseObject);
});

module.exports = router;