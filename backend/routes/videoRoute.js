const express = require('express');
const { uploadVideo, getVideos } = require('../controllers/videoController');
const router = express.Router();

router.post('/upload', uploadVideo);
router.get('/', getVideos);

module.exports = router;

