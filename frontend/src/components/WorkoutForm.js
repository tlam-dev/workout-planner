// For adding new custom workouts to the JSON file
import { useState } from "react";
import axios from "axios";

const PORT = process.env.REACT_APP_BACKEND_PORT; // Change this to your backend port if necessary
const API_URL = `http://localhost:${PORT}/workouts`;

const WorkoutForm = () => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(API_URL, { name, duration })
      .then(() => alert("Workout added!"))
      .catch(error => console.error("Error adding workout:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Workout Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Duration (mins)" value={duration} onChange={(e) => setDuration(e.target.value)} />
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
