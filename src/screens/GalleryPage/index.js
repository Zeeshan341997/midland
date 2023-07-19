import React, { useRef } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { BoxStyles } from '../../styles/componentStyles';
import { MoveToTop } from '../../components/MovingArrows';
import { scrollTop } from '../../config/helperFunction';
import { GalleryPageStyles, flexCenter } from '../../styles/pageStyles';
import Content from './Content';
import Gallery from './Gallery';

const GalleryPage = () => {
    const scrollableRef = useRef(null);

    return (
        <Box>
            <Container maxWidth={'lg'}>
                <Box sx={BoxStyles}>
                    <Grid container spacing={2} sx={[flexCenter, GalleryPageStyles.container]}>
                        <Grid item md={10}>
                            <Content />
                            <Gallery />
                        </Grid>
                    </Grid>

                    <MoveToTop onClick={() => scrollTop(scrollableRef)} />
                </Box>
            </Container>
        </Box>
    )
}

export default GalleryPage;