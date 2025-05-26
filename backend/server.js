const express = require("express");
const cors = require("cors");
const workoutRoutes = require("./src/routes/workoutsRoutes");
const scheduleRoutes = require("./src/routes/scheduleRoutes");
const fs = require("fs");
const path = require('path');

const workoutsFile = "defaultWorkouts.json";
const scheduleFile = "example.json";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Middleware to enable CORS


app.get("/", (req, res) => {
  res.send("Welcome to the backend of Workout API");
});


// Route to read workouts file and send data
app.get('/workouts', (req, res) => {
    const filePath = workoutsFile;
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error reading file' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.get("/schedule", (req, res) => {
  const filePath = scheduleFile;
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error reading schedule file" });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

require('dotenv').config();
const PORT = process.env.PORT; // Change this to your desired port number
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
