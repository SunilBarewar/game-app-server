const multer = require("multer");
const path = require("path");

console.log("multer started");
console.log("Current working directory: " + process.cwd());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: (req, file, cb) => {
    const imageName = Date.now() + "_" + file.originalname;
    req.body.imageName = imageName;
    cb(null, imageName);
  },
});

const upload = multer({ storage: storage }).single("file");

module.exports = upload;
