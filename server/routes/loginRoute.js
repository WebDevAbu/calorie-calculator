const express = require("express");
const router = express.Router();
const controller = require("../controllers/loginController");
const middleware = require("../middleware/middleware");

router.post("/register", controller.register);

// router.get("/users", controller.findAll);

router.get("/finduser/:id", controller.findOne);

router.post("/login", controller.login);

module.exports = router;
