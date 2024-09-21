const core = require('@actions/core');
const cloudinary = require('cloudinary').v2;
const path = require('path');

module.exports = function uploader(cloudName, apiKey, apiSecret, files) {
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true
  });

  const cloudinaryUploader = file => {
    core.info(`uploading ${file}`);

    return cloudinary.uploader.upload(file, {
      public_id: path.basename(file, path.extname(file)),
    });
  };

  return Promise.all(files.map(cloudinaryUploader));
}
