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
                            Contact
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
                            Information
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Vestibulum id ligula porta felis euismod semper." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Cras justo odio, dapibus ac facilisis in, egestas eget quam." />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;

