import React, { useRef } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { BoxStyles } from '../../styles/componentStyles';
import { MoveToTop } from '../../components/MovingArrows';
import { scrollTop } from '../../config/helperFunction';
import { AboutPageStyles, flexCenter } from '../../styles/pageStyles';
import Content from './Content';
import ContactForm from '../ContactPage/ContactForm';

const AboutPage = () => {
    const scrollableRef = useRef(null);

    return (
        <Box>
            <Container maxWidth={'lg'}>
                <Box sx={BoxStyles}>
                    <Grid container spacing={2} sx={[flexCenter, AboutPageStyles.container]}>
                        <Grid item md={10}>
                            <Content />
                            <ContactForm />
                        </Grid>
                    </Grid>

                    <MoveToTop onClick={() => scrollTop(scrollableRef)} />
                </Box>
            </Container>
        </Box>
    )
}

export default AboutPage;