const multer = require('multer');
const ErrorResponse = require('./errorResponse');

const upload = multer({
  limits: { fileSize: 1000000 }, // 1MB
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new ErrorResponse('Please upload an image file', 400));
    }
    cb(null, true);
  }
});

module.exports = upload;