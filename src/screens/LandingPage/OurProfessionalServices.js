import React from 'react';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { LandingPageStyles, flexCenter } from '../../styles/pageStyles';
import { proServices, proServicesVideos } from '../../config/demoData';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { themeColors } from '../../config/theme';
import { AppHeadings } from '../../components/AppHeadings';
import ReactPlayer from 'react-player';

const OurProfessionalServices = () => {

    return (
        <Grid item md={12} sx={LandingPageStyles.ourProServices} >

            <AppHeadings
                subTitle={'MIDLAND TOILET HIRE'}
                contentSec1={'Our'}
                contentSec2={'Services'}
                contentPri={'Professional'}
                para={'Whatever your requirements, Midland Toilet Hire can provide a loo to suit any venue size, any location and any budget.'}
            />

            <List className='service-list'>
                {proServices?.map((item) => <ListItem key={item}>
                    <Box sx={flexCenter} className="ellipse">
                        <img src={item?.image} alt={item?.name} />
                    </Box>
                    <Box sx={flexCenter} className="list-content">
                        <Typography className='white-text poppins-medium text-center'>{item?.name}</Typography>
                        <MdOutlineKeyboardArrowRight color={themeColors.white} size={18} />
                    </Box>
                </ListItem>)}
            </List>

            <List sx={flexCenter} className='services-video-list'>
                {proServicesVideos?.map((item) => <ListItem key={item}>
                    <ReactPlayer
                        className='react-player'
                        url={item.url}
                        width='100%'
                    />
                    {/* <img src={item?.image} alt={item?.name} /> */}
                </ListItem>)}
            </List>


        </Grid >
    )
}

export default OurProfessionalServices;