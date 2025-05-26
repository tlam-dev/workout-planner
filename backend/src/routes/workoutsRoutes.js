const express = require("express");
const { getAllWorkouts, getUserWorkouts, addUserWorkout, updateUserWorkout, deleteUserWorkout } = require("../controllers/WorkoutsController");
const router = express.Router();


//READ
router.get("/", getAllWorkouts);
router.get("/", getUserWorkouts);
//CREATE
router.post("/", addUserWorkout);
//UPDATE
router.put("/:id", updateUserWorkout);
//DELETE
router.delete("/:id", deleteUserWorkout);

module.exports = router;
