const multer = require("multer");

const storage = multer.diskStorage({
  destination:function(req, file, cb){
    const pathStorage = `${__dirname}/../storage`;

    cb(null, pathStorage);
  },
  filename:function(req, file, cb){
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`; // file-123123123.jpg

    cb(null, filename);
  }
});

const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware;
