import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Error({errorConfig}) {
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
        {errorConfig.errorMsg}
      </Typography>
      <Box sx={{
        display:"flex",
        gap: 5,
        mt: 2
      }}>
        {errorConfig.link.oneortwo && <Button variant="contained" component={Link} to={"/"}>Home</Button>}
        <Button variant="contained" component={Link} to={errorConfig.link.to}>{errorConfig.link.msg}</Button>
      </Box>
    </Box>
  );
}