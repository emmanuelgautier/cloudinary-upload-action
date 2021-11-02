const uploader = require('./uploader');

require('dotenv').config();

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

test('upload empty array', () => {
  const files = [];
  expect(uploader(cloudName, apiKey, apiSecret, files)).resolves.toStrictEqual([]);
});

test('upload one image', () => {
  const files = ['./medias/images/test1.jpg'];
  expect(uploader(cloudName, apiKey, apiSecret, files)).resolves.toHaveLength(1);
});
