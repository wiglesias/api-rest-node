const express = require("express");
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (filename) => {
  // tracks.js [tracks, js];
  return filename.split('.').shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file); // users, storage, tracks, etc...
  if(name !== 'index') {
    console.log(`Loading routes ${name}`);
    router.use(`/${name}`, require(`./${file}`)) // http://localhost:3000/api/....
  }
});


module.exports = router;
