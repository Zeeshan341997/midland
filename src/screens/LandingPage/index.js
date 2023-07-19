import React, { useRef } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { LandingPageStyles } from '../../styles/pageStyles';
import { BoxStyles } from '../../styles/componentStyles';
import { MoveToBottom, MoveToTop } from '../../components/MovingArrows';
import { scrollDown, scrollTop } from '../../config/helperFunction';
import Banner from './Banner';
import OurProfessionalServices from './OurProfessionalServices';
import AboutUs from './AboutUs';
import AllProfessionalServices from './AllProfessionalServices';


const LandingPage = (props) => {

    const scrollableRef = useRef(null);

    return (
        <Box sx={LandingPageStyles.container} ref={scrollableRef}>
            <Container maxWidth={'lg'}>
                <Box sx={BoxStyles}>
                    <Grid container spacing={2}>

                        <Banner />
                        <MoveToBottom onClick={() => scrollDown(scrollableRef)} />
                        <OurProfessionalServices />
                        <AboutUs />
                        <AllProfessionalServices />

                    </Grid>
                    <MoveToTop onClick={() => scrollTop(scrollableRef)} />

                </Box>
            </Container>
        </Box>
    )
}

export default LandingPage;