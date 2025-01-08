import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => (
    <Box
        component="header"
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            boxShadow: 2,
        }}
    >
        <Typography variant="h2" component="h1" gutterBottom>
            My App
        </Typography>
    </Box>
);

export default Header;

