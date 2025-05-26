const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true }
});

module.exports = mongoose.model("Workout", workoutSchema);
