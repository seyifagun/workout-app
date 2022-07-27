require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
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

// connect to db 
// NOTE :: .connect() method is an async fn, hence, it returns a promise
// NOTE :: we only want to listen to the request only when we are connected to the db
// ....hence, the reason why app.listen() is returned 
mongoose.connect(process.env.MONGO_URL).then(() => {
    //listen to request
    app.listen(`${process.env.PORT}`, () => {
        console.log(`connected to db & server now running on port ${process.env.PORT}`)
    });
}).catch((errr) => {
    console.log('error', errr);
})

