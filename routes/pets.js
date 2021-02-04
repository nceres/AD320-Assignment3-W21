const express = require("express");
const router = express.Router();

​// require pets data
const petsJson = require("../data/pets.json");

// GET list of all Pets
router.get("/", (req, res) => {
  res.json(petsJson);

});

​//Gets pets for a specified id
router.get("/:id", (req,res) => {
  const pets = petsJson.find(pet => pet.id === parseInt(req.params.id));
  res.send(pets);
});

module.exports = router;