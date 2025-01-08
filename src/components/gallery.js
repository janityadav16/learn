import { Grid } from '@mui/material';

const images = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
]

const Gallery = () => (
    <Grid container spacing={2}>
        {images.map((image, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
                <img src={image} alt="gallery" className="gallery-image" />
            </Grid>
        ))}
    </Grid>
)

export default Gallery

