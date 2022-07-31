import React, {useState} from 'react'

const WorkoutForm = () => {

const [title, setTitle] = useState('');
const [load, setLoad] = useState('');
const [reps, setReps] = useState('');

const handleSubmit = async(e) => {
    //prevent submit of form on load of page
    e.preventDefault();

    const workout = {title, load, reps}
    const response = await fetch('/api/workouts', {
        method: 'POST',
        //JSONA
        body: JSON.stringify(workout)
    })
}

  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Exercise Title: </label>
        <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)} 
            value={title} 
        />

        <label>Load (in kg): </label>
        <input 
            type="text" 
            onChange={(e) => setLoad(e.target.value)} 
            value={load} 
        />

        <label>Reps: </label>
        <input 
            type="number" 
            onChange={(e) => setReps(e.target.value)}
            value={reps} 
        />
        <button>Add Workout</button>
    </form>
  )
}

export default WorkoutForm