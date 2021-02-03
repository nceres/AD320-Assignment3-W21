const express = require('express');
const router = express.Router();

// Users data to use in the app
const users = require('../data/users.json');
// Get route for Users JSON file
router.get('/', (req, res) => {
    res.json(users);
});
// Get query input parameter for use in search
router.get('/:id', (req, res) => {

    let target = {}; // just an Empty object
    finder = req.params.id;
// Iterate through each data and compare with query input parameter
    users.forEach((item) => {
        if (item.id == finder)
            target = item;
    });
// Decision if User data is found or not.
    (target !== null) ? found() : notFound();


// Function if Users data is found, and return the object value.
    function found() {
        res.json(target);
    }
// Function if Users data is not found, and return an empty object and status.
    function notFound() {
        res.status(200);
        res.jason(target);
    }

});

module.exports = router;