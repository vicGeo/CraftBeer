const express = require("express");
const multer = require("multer");
const router = express.Router();


const multerS3 = require("multer-s3");
const aws = require("aws-sdk");


const s3 = new aws.S3();
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  accessSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "eu-west-1",
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: "public-read",
    s3: s3,
    bucket: `craftbeergeekshubs`,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: "TESTING_METADATA" });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

const returnImageUrl = (req, res) => {
  return res.send(`${req.file.location}`);
};


router
  .route("/")
  .post(upload.single("image"), returnImageUrl);


module.exports = router;
