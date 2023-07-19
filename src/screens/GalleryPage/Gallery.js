import { Box, Grid } from "@mui/material";
import { BoxStyles } from "../../styles/componentStyles";
import { GalleryPageStyles, flexCenter } from "../../styles/pageStyles";
import { galleryData } from "../../config/demoData";


const Gallery = () => {
    return (
        <Box sx={[BoxStyles, flexCenter, GalleryPageStyles.gallery]}>
            {galleryData?.map((item) => {
                return (
                    <Grid key={item} md={2.8}>
                        <img src={item} alt="gallery" />
                    </Grid>
                )
            })}
        </Box>
    )
}

export default Gallery;