import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Error() {
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
      <Typography variant="h1">
        404
      </Typography>
      <Typography variant="h6">
        The page you’re looking for doesn’t exist.
      </Typography>
      <Box sx={{
        display:"flex",
        gap: 5,
        mt: 2
      }}>
        <Button variant="contained" component={Link} to={"/"}>Home</Button>
        <Button variant="contained" component={Link} to={-1}>Previous Page</Button>
      </Box>
    </Box>
  );
}