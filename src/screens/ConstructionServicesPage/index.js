import React, { useRef } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { BoxStyles } from '../../styles/componentStyles';
import { MoveToTop } from '../../components/MovingArrows';
import { scrollTop } from '../../config/helperFunction';
import ConstructionServices from './ConstructionServices';
import ContactPage from '../ContactPage';


const ConstructionServicesPage = () => {
    const scrollableRef = useRef(null);

    return (
        <Box>
            <Container maxWidth={'lg'}>
                <Box sx={[BoxStyles]}>
                    <ConstructionServices />
                    <ContactPage />
                    <MoveToTop onClick={() => scrollTop(scrollableRef)} />
                </Box>
            </Container>
        </Box>
    )
}

export default ConstructionServicesPage;