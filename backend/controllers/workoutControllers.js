const Workout = require('../models/workoutModel'); 
const mongoose = require('mongoose');
//get all workouts 
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createedAt: -1})

    res.status(200).json(workouts)
}

//get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params
    // check id type
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'id does not exist'})
    }
    
    const workout = await Workout.findById(id)
    //  check for invalid workout
    if(!workout){
        return res.status(404).json({error:'No suh workout'})
    }

    res.status(200).json(workout)
}

//create new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    //add documents to db
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete existing workout
    const deleteWorkout = async (req, res) => {
        const{id} = req.params

    // check id validity
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
     //  check for invalid workout
     if(!workout){
        return res.status(404).json({error:'No suh workout'})
    }

    res.status(200).json(workout)
}

//update existing workout
    const updateWorkout = async (req, res) => {
        const {id} = req.params
         // check id validity
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such workout'})
    }
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
     //  check for invalid workout
     if(!workout){
        return res.status(404).json({error:'No suh workout'})
    }

    res.status(200).json(workout)
    
    }

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}