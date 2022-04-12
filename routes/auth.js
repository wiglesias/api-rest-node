const express = require("express");
const router = express.Router();

const { loginController } = require("../controllers/auth");
const { validatorRegister } = require("../validators/auth");

router.post("/register", validatorRegister, loginController);

module.exports = router;
