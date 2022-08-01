import React from 'react'
import { useState, useEffect } from 'react';

//component
import WorkoutDetails from "../components/WorkoutDetails";
const Home = () => {
    const [workouts, setWorkouts] = useState(null);
    // fetch data from API on the backend when page renders
    useEffect(() => {
        //fetch logic is embedded inside the fetchWorkouts variable
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()
            console.log('Print json data', json)

            if (response.ok) {
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
        </div>
    )
}

export default Home