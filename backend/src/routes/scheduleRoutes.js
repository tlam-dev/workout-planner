const express = require("express");
const { getSchedule, saveSchedule, deleteSchedule } = require("../controllers/ScheduleController");
const router = express.Router();

//READ
router.get("/", getSchedule);
//CREATE
router.post("/", saveSchedule);
//DELETE
router.delete("/", deleteSchedule);

module.exports = router;