const s3 = require('../config/s3');
const Video = require('../models/Video');

exports.uploadVideo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const file = req.file;

    const result = await s3.upload({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `videos/${Date.now()}-${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    }).promise();

    const video = new Video({ title, description, url: result.Location });
    await video.save();

    res.status(201).json({ video });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
