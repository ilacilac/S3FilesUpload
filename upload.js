const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  accessKeyId: process.env.KEYID,
  secretAccessKey: process.env.KEY,
  region: process.env.REGION,
});

const storage = multerS3({
  s3: s3,
  bucket: "bucket-name",
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: "public-read",
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

exports.upload = multer({ storage: storage });
