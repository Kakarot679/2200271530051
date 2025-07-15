

import React, { useEffect, useState } from 'react';
import { fetchStats } from '../api';
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material';

const StatsPage = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const data = await fetchStats();
        setStats(data);
      } catch (error) {
        console.error('Error loading stats', error);
      }
    };
    getStats();
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5">Shortened URLs Stats</Typography>
      <List>
        {stats.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Original: ${item.originalUrl}`}
              secondary={`Short: ${item.shortUrl} | Clicks: ${item.clickCount}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default StatsPage;
