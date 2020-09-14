const express = require("express");
const charactersModel = require("../helpers/charactersModel");

const router = express.Router();

router.get("/", (req, res) => {
    charactersModel
    .get(req.id)
    .then( e => {
        res.status(200).json(e)
    })
    .catch( error => {
        console.log(error)
        res.status(500).json({ error: "Error retrieving characters" })
    })
})
router.post("/", (req, res) => {
    const characterInfo = req.body
    charactersModel
    .insert(characterInfo)
    .then( (e) => {
        res.status(201).json([{message: "Character added!"}, e]);
    })
    .catch( error => {
        res.status(500).json({ error: "Error creating characters" })
    })
})

router.put('/:id', (req, res) => {
    const characterInfo = req.body

    const { id } = req.params
    charactersModel
    .update(id, characterInfo)
    .then( (e) => {
        if (e) {
            res.status(200).json({ message: "Character has been updated" })
        } else {
            res.status(404).json({ message: "Character could not be found" })
        }
    })
    .catch( error => {
        res.status(500).json({ error: "There was an error updating the character" })
    })
})

router.delete('/:id', (req, res) => {
    charactersModel
    .remove(req.params.id)
    .then( e => {
        if (e > 0){
            res.status(200).json({ message: "Character was successfully been deleted" })
        } else {
            req.status(404).json({ message: "Character could not be found" })
        }
    })
    .catch( error => {
        res.status(500).json({ error: "Error deleting characters" })
    })
})


module.exports = router;