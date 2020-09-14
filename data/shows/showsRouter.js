const { json } = require("express");
const express = require("express");
const { route } = require("../../server.js");
const showsModel = require("../helpers/showsModel.js");

const router = express.Router();

// Create

router.post("/", (req, res) => {
    const showInfo = req.body
    showsModel
    .insert(showInfo)
    .then(() => {
        res.status(201).json(({ message: "Your show was created!" }))
    })
})


// Read

router.get("/", (req, res) => {
    showsModel
    .get(req.id)
    .then( e =>  {
        res.status(200).json(e)
    })
    .catch( error => {
        console.log(error);
        res.status(500).json({ message: "Error retreiving show!" })
    })
})


// Update

router.put("/:id", (req, res) => {
    const showInfo = req.body
    const { id } = req.params;

    showsModel
    .update(id, showInfo)
    .then(e => {
        if (e) {
            res.status(200).json({ message: "The show has been updated!" })
        } else {
            res.status(404).json({ message: "The show could not be updated, data wasn't found!" })
        }
    })
    .catch( err => {
        res.status(500).json({ error: "There was an error updating the show!" })
    })
})


// Delete

router.delete("/:id", (req, res) => {
    showsModel
    .remove(req.params.id)
    .then(e => {
        if(e > 0) {
            res.status(200).json({ message: "The show has been deleted!" })
        } else {
            res.status(404).json({ message: "The show could not be deleted, data wasn't found!" })
        }
    })
    .catch( err => {
        res.status(500).json({ error: "There was an error deleting the show!" })
    })
})


// Get shows characters 

router.get("/:id/characters", (req, res) => {
    showsModel
    .getShowsCharacters(req.params.id)
    .then((e) => {
        res.status(200).json(e);
    })
    .catch( error => {
        console.log(error);
        res.status(500).json({ error: "Error retrieving characters for this show!" })
    })
})

module.exports = router;