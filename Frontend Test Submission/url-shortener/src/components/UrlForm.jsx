// components/UrlForm.jsx
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper
} from '@mui/material';
import { createShortUrl } from '../api';

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const result = await createShortUrl({ originalUrl: url });
      setShortUrl(result.shortUrl);
    } catch (err) {
      setError('Failed to shorten URL');
    }
  };

  return (
    <Box
      sx={{
        mt: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 500,
          bgcolor: '#f3f6f9',
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: '#1976d2', fontWeight: 'bold' }}
        >
          🔗 Shorten a URL
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Enter URL"
            variant="outlined"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            margin="normal"
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, py: 1 }}
          >
            Shorten
          </Button>
        </form>

        {shortUrl && (
          <Typography mt={3} sx={{ color: 'green', wordBreak: 'break-all' }}>
            Shortened URL: <a href={shortUrl}>{shortUrl}</a>
          </Typography>
        )}

        {error && (
          <Typography mt={2} color="error">
            {error}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default UrlForm;
