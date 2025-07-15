// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UrlForm from './components/UrlForm';
import StatsPage from './components/StatsPage';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const App = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom sx={{ mt: 4, fontWeight: 'bold', color: '#3f51b5' }}>
        URL Shortener
      </Typography>
      <Routes>
        <Route path="/" element={<UrlForm />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Container>
  );
};

export default App;
