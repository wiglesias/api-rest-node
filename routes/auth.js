const express = require("express");
const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { usersModel } = require("../models");
const router = express.Router();
const { validatorRegister } = require("../validators/auth")

router.post("/register", validatorRegister, async (req, res) => {
  req = matchedData(req);
  const password = await encrypt(req.password);
  const body = {...req, password};
  const data = await usersModel.create(body);

  res.send({data});
});

module.exports = router;
