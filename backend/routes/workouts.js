const express = require('express');

const router = express.Router();

//GET all workouts
router.get('/', (req, res) => {
    res.json({message:'GET all workouts'})
});

//GET single workout
router.get('/:id', (req, res) => {
    res.json({message:'GET single workout'})
})

//POST a new workout
router.post('/:id', (req, res) => {
    res.json({message:'POST a new workout'})
});

//DELETE a new workout
router.delete('/:id', (req, res) => {
    res.json({message:'DELETE a workout'})
});

//UPDATE a new workout
router.patch('/id', (req, res) => {
    res.json({message:'UPDATE a new workout'})
});

//export router piece of code
module.exports = router