// For picking workouts in the Schedule Editor
import { useEffect, useState } from "react";
import axios from "axios";

const PORT = process.env.REACT_APP_BACKEND_PORT; // Change this to your backend port if necessary
const API_URL = `http://localhost:${PORT}/schedule`;

const WorkoutPicker = ({ onSelectWorkout }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setWorkouts(response.data))
      .catch(error => console.error("Error fetching workouts:", error));
  }, []);

  return (
    <div>
      <h3>Pick a Workout</h3>
      <ul>
        {workouts.map(workout => (
          <li key={workout.name}>
            <button onClick={() => onSelectWorkout(workout)}>{workout.name} ({workout.muscleGroup})</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutPicker;
