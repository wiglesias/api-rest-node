const express = require("express");
const { getItems, createItem, getItem, updateItem, deleteItem } = require("../controllers/tracks");
const checkRol = require("../middleware/rol");
const authMiddleware = require("../middleware/session");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const router = express.Router();

router.get("/", getItems);

router.get("/:id", validatorGetItem, getItem);

router.post("/", authMiddleware, checkRol(["user", "admin"]), validatorCreateItem, createItem);

router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem);

router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

module.exports = router;
