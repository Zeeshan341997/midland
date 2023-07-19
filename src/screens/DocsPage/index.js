import React, { useRef } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { BoxStyles } from '../../styles/componentStyles';
import { MoveToTop } from '../../components/MovingArrows';
import { scrollTop } from '../../config/helperFunction';
import { DocsPageStyles, flexCenter } from '../../styles/pageStyles';
import Content from './Content';
import Pdfs from './Pdfs';

const DocsPage = () => {
    const scrollableRef = useRef(null);

    return (
        <Box>
            <Container maxWidth={'lg'}>
                <Box sx={BoxStyles}>
                    <Grid container spacing={2} sx={[flexCenter, DocsPageStyles.container]}>
                        <Grid item md={11}>
                            <Content />
                            <Pdfs />
                        </Grid>
                    </Grid>

                    <MoveToTop onClick={() => scrollTop(scrollableRef)} />
                </Box>
            </Container>
        </Box>
    )
}

export default DocsPage;