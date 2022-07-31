const express = require('express');
const { createWorkout, 
        getWorkouts, 
        getWorkout, 
        deleteWorkout, 
        updateWorkout } = require('../controllers/workoutControllers');


const router = express.Router();

//GET all workouts
router.get('/', getWorkouts);

//GET single workout
router.get('/:id', getWorkout);

//POST a new workout
router.post('/', createWorkout);

//DELETE a new workout
router.delete('/:id', deleteWorkout);

//UPDATE a new workout
router.patch('/:id', updateWorkout);

//export router piece of code
module.exports = router