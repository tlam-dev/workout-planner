import { useEffect, useState } from "react";
import axios from "axios";

const PORT = process.env.REACT_APP_BACKEND_PORT; // Change this to your backend port if necessary
const API_URL = `http://localhost:${PORT}/schedule`;

const ScheduleView = () => {
  const [schedule, setSchedule] = useState({});
  const currentDay = getCurrentDay();
  const orderedDays = getReorderedDays();

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setSchedule(response.data))
      .catch(error => console.error("Error fetching schedule:", error));
  }, []);

  return (
    <div class="schedule-container" style={{margin: "auto"}}>
      {orderedDays.map((day) => (
      <div key={day} className={`day-column ${day === getCurrentDay() ? "highlight" : ""}`}>
        <h2>{day} - {schedule[day]?.tag || "Rest Day"}</h2>
        {schedule[day]?.workouts?.filter(workout => workout.reps !== 0 || workout.sets !== 0 || workout.time !== 0)
          .map((workout, index) => (
            <div key={index}>
              <p><strong>{workout.name}</strong></p>
              <p>Reps: {workout.reps}</p>
              <p>Sets: {workout.sets}</p>
              {workout.time !== 0 && <p>Time: {formatTime(workout.time)}</p>}
            </div>
          ))}
      </div>
    ))}
    </div>
  );
};

// This component fetches the schedule from the backend and displays it in a structured format.
const formatTime = (time) => {
  if (time === 0) return ""; // Don't display if time is 0
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  if (hours > 0) {
    return minutes > 0 ? `${hours} hour${hours > 1 ? "s" : ""} ${minutes} min${minutes > 1 ? "s" : ""}` : `${hours} hour${hours > 1 ? "s" : ""}`;
  } else if (minutes > 0) {
    return seconds > 0 ? `${minutes} min${minutes > 1 ? "s" : ""} ${seconds} sec${seconds > 1 ? "s" : ""}` : `${minutes} min${minutes > 1 ? "s" : ""}`;
  } else {
    return `${seconds} sec${seconds > 1 ? "s" : ""}`;
  }
};

const getCurrentDay = () => {
  const today = new Date();
  return today.toLocaleDateString("en-US", { weekday: "long" });
};

const getReorderedDays = () => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayIndex = daysOfWeek.indexOf(today);

  // Ensure today is at index 2 (third column)
  return [
    ...daysOfWeek.slice(todayIndex - 2).concat(daysOfWeek.slice(0, todayIndex - 2))
  ];
};




export default ScheduleView;
