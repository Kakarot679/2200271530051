const express = require('express');
const cors = require('cors');
const logger = require('./Logging Middleware/logger');

const urlData = require('./Logging Middleware/data');
const shortenRouter = require('./Logging Middleware/routes/shorten');
const statsRouter = require('./Logging Middleware/routes/stats');

const app = express();
app.use(cors());
app.use(express.json());

// Error logging middleware
app.use(logger);

// Routes
app.use('/shorten', shortenRouter);
app.use('/stats', statsRouter);

// Redirect route
app.get('/:shortId', (req, res) => {
  const { shortId } = req.params;
  const found = urlData.find(entry => entry.shortId === shortId);

  if (found) {
    found.clickCount++;
    res.redirect(found.originalUrl);
  } else {
    res.status(404).send('Short URL not found');
  }
});

// Fallback error handler
app.use((err, req, res, next) => {
  res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
  console.log('✅ Server running on port 3000');
});
