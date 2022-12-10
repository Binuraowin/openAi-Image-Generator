const express = require('express');
const { generateImage } = require('../controllers/openai.controller');
const router = express.Router();

router.post('/ai/generateimage', generateImage);

module.exports = router;