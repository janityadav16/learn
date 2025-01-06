import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[20],
    },
}));

const cardsData = [
    {
        title: 'Card 1',
        image: 'https://via.placeholder.com/300',
        description: 'This is the first card.',
    },
    {
        title: 'Card 2',
        image: 'https://via.placeholder.com/300',
        description: 'This is the second card.',
    },
    {
        title: 'Card 3',
        image: 'https://via.placeholder.com/300',
        description: 'This is the third card.',
    },
];

function Cards() {
    return (
        <Grid container spacing={2}>
            {cardsData.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <StyledCard>
                        <CardMedia
                            component="img"
                            height="140"
                            image={card.image}
                            alt={card.title}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {card.description}
                            </Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    );
}

export default Cards;

