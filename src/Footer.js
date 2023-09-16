// Footer.js
import React from 'react';
import { BottomNavigation, BottomNavigationAction, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Container>
      <BottomNavigation>
        <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
        <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
      </BottomNavigation>
    </Container>
  );
}

export default Footer;
