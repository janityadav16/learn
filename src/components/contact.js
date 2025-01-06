import { Box, Container, Grid, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const Contact = () => {
    return (
        <Box
            component="section"
            sx={{
                py: 12,
            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Contact Information
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Email:" secondary="example@email.com" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Phone:" secondary="+1234567890" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Location:" secondary="123 Example Street, Example City, Example State" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;

