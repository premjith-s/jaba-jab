// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            JabaJab
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
