const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.get("/findall", controller.findAll);

router.get("/findone/:id", controller.findOne);

router.post("/add_caloriedetails", controller.addData);

router.put("/update/:id", controller.updateData);

router.delete("/remove/:id", controller.deleteData);

// router.get("/fooditem/get", controller.getFoodItem);

// router.get("/energyburn/get", controller.getEnergyBurn);

// router.get("/get/sorting/:sort", controller.sorting);

module.exports = router;
