import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Spinner() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: `calc(100vh - 230px)`,
      }}
    >
      <CircularProgress size={120} color="primary" />
      <Typography variant="body1" sx={{ mt: 2, fontSize: "3rem" }}>
        Gathering requested data...
      </Typography>
    </Box>
  );
};

