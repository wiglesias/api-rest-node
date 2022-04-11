const express = require("express");
const { createItem } = require("../controllers/storage");
const uploadMiddleware = require("../utils/handleStorage");
const router = express.Router();


router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;
