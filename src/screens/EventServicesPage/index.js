import React, { useRef } from 'react';
import { Box, Container } from '@mui/material';
import { BoxStyles } from '../../styles/componentStyles';
import { MoveToTop } from '../../components/MovingArrows';
import { scrollTop } from '../../config/helperFunction';
import EventServices from './EventServices';
import ContactPage from '../ContactPage';


const EventServicesPage = () => {
    const scrollableRef = useRef(null);

    return (
        <Box>
            <Container maxWidth={'lg'}>
                <Box sx={[BoxStyles]}>
                    <EventServices />
                    <ContactPage />
                    <MoveToTop onClick={() => scrollTop(scrollableRef)} />
                </Box>
            </Container>
        </Box>
    )
}

export default EventServicesPage;