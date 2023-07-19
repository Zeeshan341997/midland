import React, { useRef } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { BoxStyles } from '../../styles/componentStyles';
import { MoveToTop } from '../../components/MovingArrows';
import { scrollTop } from '../../config/helperFunction';
import { TestimonialsPageStyles, flexCenter } from '../../styles/pageStyles';
import Content from './Content';
import TestimonialsSlider from './TestimonialsSlider';

const TestimonialsPage = () => {
    const scrollableRef = useRef(null);

    return (
        <Box>
            <Container maxWidth={'lg'}>
                <Box sx={BoxStyles}>
                    <Grid container spacing={2} sx={[flexCenter, TestimonialsPageStyles.container]}>
                        <Grid item md={10}>
                            <Content />
                            <TestimonialsSlider />
                        </Grid>
                    </Grid>

                    <MoveToTop onClick={() => scrollTop(scrollableRef)} />
                </Box>
            </Container>
        </Box>
    )
}

export default TestimonialsPage;