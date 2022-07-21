require('dotenv').config()

const express = require('express');

//
const workoutRoutes = require('./routes/workouts')

//express app
const app = express();

//middleware -- a piece of code that gets req and send res to the server
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
}) 

// respond to request || routes
app.use('/api/workouts', workoutRoutes);

//listen to request
app.listen(`${process.env.PORT}`, () => {
    console.log(`server now running on port ${process.env.PORT}`)
});
