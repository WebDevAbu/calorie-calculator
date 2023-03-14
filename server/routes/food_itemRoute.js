const express = require("express");
const router = express.Router();
const controller = require("../controllers/food_itemController");

router.post("/fooditem/add", controller.addItem);
router.get("/fooditem/get", controller.getItem);

module.exports = router;
