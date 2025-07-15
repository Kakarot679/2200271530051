// backend/routes/stats.js
const express = require('express');
const router = express.Router();
const urlData = require('../data');

router.get('/', (req, res) => {
  res.json(urlData);
});

module.exports = router;
