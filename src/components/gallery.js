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
        <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
                {images.slice(0, 4).map((image, index) => (
                    <Grid item key={index}>
                        <img src={image} alt="gallery" className="gallery-image" />
                    </Grid>
                ))}
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
                {images.slice(4, 8).map((image, index) => (
                    <Grid item key={index}>
                        <img src={image} alt="gallery" className="gallery-image" />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </Grid>
)

export default Gallery
