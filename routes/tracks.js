const express = require("express");
const { getItems, createItem } = require("../controllers/tracks");
const { validatorCreateItem } = require("../validators/tracks");
const router = express.Router();


router.get("/", getItems);

router.post("/", validatorCreateItem, createItem);


module.exports = router;
