const express = require("express");
const router = express.Router();

const { registerController } = require("../controllers/auth");
const { validatorRegister } = require("../validators/auth");

router.post("/register", validatorRegister, registerController);

module.exports = router;
