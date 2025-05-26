import { useEffect, useState } from "react";
import axios from "axios";

const PORT = process.env.REACT_APP_BACKEND_PORT; // Change this to your backend port if necessary
const API_URL = `http://localhost:${PORT}/schedule`;

const ScheduleView = () => {
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setSchedule(response.data))
      .catch(error => console.error("Error fetching schedule:", error));
  }, []);

  return (
    <div class="schedule-container" style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      {Object.keys(schedule).map((day) => (
      <div key={day}>
        <h2>{schedule[day].tag} ({day})</h2>
        {schedule[day].workouts
          .filter(workout => workout.reps !== 0 || workout.sets !== 0 || workout.time !== 0)
          .map((workout, index) => (
            <div key={index}>
              <p>Name: {workout.name}</p>
              <p>Reps: <input type="number" value={workout.reps} /></p>
              <p>Sets: <input type="number" value={workout.sets} /></p>
              <p>Time: <input type="number" value={workout.time} /></p>
            </div>
          ))}
      </div>
    ))}
    </div>
  );
};

export default ScheduleEditor;

/*
import { useState } from 'react';
const [jsonData, setJsonData] = useState(initialJson);

const scheduleEdit = (day, index, key, value) => {
  setJsonData(prevData => {
    const updatedWorkouts = [...prevData[day].workouts];
    updatedWorkouts[index][key] = Number(value);

    return {
      ...prevData,
      [day]: {
        ...prevData[day],
        workouts: updatedWorkouts,
      }
    };
  });
};
*/
