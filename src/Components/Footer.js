import * as React from 'react';
import {FooterWrapper} from './FooterStyled';
import Box from '@mui/material/Box';


export default function Footer() {
  return (
    <FooterWrapper sx={{ bottom: 0, left: 0, right: 0 }} elevation={3} >
        <Box><h5>© TechKNOW. Made in 🇮🇳</h5></Box>
    </FooterWrapper>
  );
}
