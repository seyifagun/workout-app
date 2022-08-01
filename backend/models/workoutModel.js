const mongoose = require('mongoose');

const Schema = mongoose.Schema

//structure of how data will be || schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: { 
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

//export model
const Workout = mongoose.model('Workout', workoutSchema)
module.exports = Workout

//model
Workout.find()
