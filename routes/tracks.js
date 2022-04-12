const express = require("express");
const { getItems, createItem, getItem, updateItem } = require("../controllers/tracks");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const router = express.Router();


router.get("/", getItems);

router.get("/:id", validatorGetItem, getItem);

router.post("/", validatorCreateItem, createItem);

router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

module.exports = router;
