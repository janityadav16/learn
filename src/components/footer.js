import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="body2" color="text.secondary" align="center">
                    Copyright &copy; {new Date().getFullYear()}{' '}
                    <Link color="inherit" href="https://github.com/">
                        My Website
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;

