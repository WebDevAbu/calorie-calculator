const express = require("express");
const router = express.Router();
const controller = require("../controllers/exerciseController");

router.post("/exercise/add", controller.addExercise);
router.get("/exercise/get", controller.getExercise);

module.exports = router;
