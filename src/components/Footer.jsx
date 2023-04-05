import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function GuestFooter() {
  return (
    <Paper sx={{
      display: { xs: 'none', md: 'block' },
      marginTop: '60px',
      width: '100%',
    }} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/about"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           Developed by FSB
           <br/>
           Copyright ©{new Date().getFullYear()}.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}