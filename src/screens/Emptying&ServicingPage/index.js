import React, { useRef } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { BoxStyles } from '../../styles/componentStyles';
import { MoveToTop } from '../../components/MovingArrows';
import { scrollTop } from '../../config/helperFunction';
import EmptyingServicing from './EmptyingServicing';
import ContactPage from '../ContactPage';
import TestimonialsPage from '../TestimonialsPage';


const ConstructionServicesPage = () => {
    const scrollableRef = useRef(null);

    return (
        <Box>
            <Container maxWidth={'lg'}>
                <Box sx={[BoxStyles]}>
                    <EmptyingServicing />
                    <TestimonialsPage />
                    <ContactPage />
                    <MoveToTop onClick={() => scrollTop(scrollableRef)} />
                </Box>
            </Container>
        </Box>
    )
}

export default ConstructionServicesPage;