const express = require('express');
const router = express.Router();

//Requires to have the apps.json file on server
//Also we create the array
const appsData = require('../data/apps.json');

//Using router object and express function Get
// we send data to json 
router.get('/', function(req, res, next) {
    res.json(appsData);
});

router.get('/:id', function(req, res, next) {
    var parsed = parseInt(req.params.id);
    var found = new Object();

    // We parse the ID number from the request and 
    // looking for a matching number in the array of 
    // apps we created using while loop. If we have a match,
    // we return it as an Object

    var idx = 0;
    while (idx < appsData.length) {
        if (appsData[idx].id == parsed) {
            found = appsData[idx];       
        }
        idx++;
    }
    
    // Check if the object exists.
    // If it does not, send code 200 with an empty object
    if (Object.keys(found).length == 0) {

        res.status(200).json({});
        
    } else {
        res.json(found);
    }

})


module.exports = router;