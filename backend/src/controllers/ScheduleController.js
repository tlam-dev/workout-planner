const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "schedule.json"); // This file contains an example schedule

// This function is used to READ the schedule from the JSON file
exports.getSchedule = (req, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching schedule", error: err });
    }

    const schedule = JSON.parse(data);
    res.status(200).json(schedule);
  });
};

// This function is used to CREATE a new schedule or UPDATE an existing one
exports.saveSchedule = (req, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ message: "Error reading file", error: err });

    let schedule = JSON.parse(data);
    const { day, tag, workouts } = req.body;

    schedule[day] = { tag, workouts };

    fs.writeFile(filePath, JSON.stringify(schedule, null, 2), (err) => {
      if (err) return res.status(500).json({ message: "Error saving schedule", error: err });
      res.status(201).json({ message: "Schedule updated successfully", schedule });
    });
  });
};

// This function is used to DELETE a schedule
exports.deleteSchedule = (req, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ message: "Error reading file", error: err });

    let schedule = JSON.parse(data);
    const { day } = req.body;

    if (!schedule[day]) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    delete schedule[day];

    fs.writeFile(filePath, JSON.stringify(schedule, null, 2), (err) => {
      if (err) return res.status(500).json({ message: "Error saving schedule", error: err });
      res.status(200).json({ message: "Schedule deleted successfully", schedule });
    });
  });
}
