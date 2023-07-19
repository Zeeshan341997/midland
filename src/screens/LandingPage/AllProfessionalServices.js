import React from 'react';
import { Grid, List, ListItem, Typography } from '@mui/material';
import { LandingPageStyles, flexCenter } from '../../styles/pageStyles';
import { themeColors } from '../../config/theme';
import { AppHeadings } from '../../components/AppHeadings';
import { allServices } from '../../config/demoData';

const AllProfessionalServices = () => {

    return (
        <Grid item md={12} sx={LandingPageStyles.allServices}>

            <AppHeadings
                contentSec1={'All'}
                contentSec2={'Services'}
                contentPri={'Professional'}
            />

            <List sx={flexCenter} className='all-services-list'>
                {allServices?.map((item) => {
                    const bgColor = item?.id <= 4 ? themeColors?.secondary : themeColors?.primary;
                    return (
                        <ListItem key={item?.id} sx={{ backgroundColor: bgColor }}>
                            <Typography className='text-center poppins-bold uppercase white-text'>{item?.name}</Typography>
                        </ListItem>
                    )
                })}
            </List>


        </Grid >
    )
}

export default AllProfessionalServices;