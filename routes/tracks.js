const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const data = ["Hola", "Món"];

  res.send({data});
});

module.exports = router;
