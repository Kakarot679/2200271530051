// backend/routes/shorten.js
const express = require('express');
const router = express.Router();
const urlData = require('../data');

router.post('/', (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: 'Original URL is required' });
  }

  const shortId = Math.random().toString(36).substring(2, 8);
  const shortUrl = `http://localhost:3000/${shortId}`;

  urlData.push({
    originalUrl,
    shortUrl,
    shortId,
    clickCount: 0,
  });

  res.json({ shortUrl });
});

module.exports = router;
