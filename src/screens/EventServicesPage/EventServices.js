import React from 'react';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { AppImages } from '../../components/AppImages';
import { ConstructionServicesStyle, CustomBtn, flexCenter } from '../../styles/pageStyles';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { themeColors } from '../../config/theme';
import { useNavigate } from 'react-router-dom';



const EventServices = () => {

    const navigate = useNavigate();

    const functions = {
        handleNavigate: () => {
            navigate('/contact-us');
        },
        handleNavigate2: () => {
            navigate('/post-code-search');
        },
    };

    return (
        <Grid container sx={[ ConstructionServicesStyle.construction]}>
            <Grid spacing={2} sx={[flexCenter]} className='flex_wrapper'>
                <Grid item md={6}>
                    <Typography className="secondary-text coolvetica-regular text-left title break-word">
                        Event Toilet
                        <Typography className="primary-text text-left coolvetica-regular title" component={'span'}>
                            &nbsp;Hire,&nbsp;
                        </Typography>
                    </Typography>

                    <Typography className="gray-text small-text myridPro-regular text-left">
                        Our standard event toilets are completely self-contained
                        recirculating units. They can be used in your garden or in
                        larger quantities for an event. The units are delivered fully
                        equipped with toilet rolls and the required chemical.
                    </Typography>

                    <Box sx={CustomBtn.button_wrapper}>
                        <Button sx={flexCenter} className="buttonS" onClick={functions.handleNavigate}>
                            <Typography className=' poppins-medium text-center'>Find Out More</Typography>
                            <MdOutlineKeyboardArrowRight color={themeColors.white} size={18} />
                        </Button>

                        <Button sx={flexCenter} className="buttonP" onClick={functions.handleNavigate2}>
                            <Typography className=' poppins-medium text-center'>Operational Area</Typography>
                            <MdOutlineKeyboardArrowRight color={themeColors.white} size={18} />
                        </Button>
                    </Box>
                    <Typography component={'h2'} className="secondary-text coolvetica-regular">
                        <a href="tel:08009992820" className="secondary-text">0800 999 2820</a>
                    </Typography>
                </Grid>
                <Grid item md={5}>
                    <Box className="relative images-wrap">
                        <img src={AppImages.eventToilet}  />
                    </Box>
                </Grid>
            </Grid>

            <Divider/>

            <Grid spacing={2} sx={[flexCenter]} className='flex_wrapper'>
                <Grid item md={5}>
                    <Box className="relative images-wrap">
                        <img src={AppImages.wheelChairToilet}  />
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Typography className="secondary-text coolvetica-regular text-left title2">
                        Wheelchair
                        <Typography className="primary-text text-left coolvetica-regular title2" component={'span'}>
                            Toilet
                        </Typography>
                    </Typography>

                    <Typography className="gray-text small-text myridPro-regular text-left">
                        Our wheelchair accessible toilet is designed with a generous door
                        opening, handrails, low-level washing facilities, and easy accessibility
                        for guests at public events. Contact us for wheelchair toilet hire.
                    </Typography>

                    <Box sx={CustomBtn.button_wrapper}>
                        <Button sx={flexCenter} className="buttonS" onClick={functions.handleNavigate}>
                            <Typography className=' poppins-medium text-center'>Find Out More</Typography>
                            <MdOutlineKeyboardArrowRight color={themeColors.white} size={18} />
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid spacing={2} sx={[flexCenter]} className='flex_wrapper'>
                
                <Grid item md={6}>
                    <Typography className="secondary-text coolvetica-regular text-left title2 break-word">
                        4 Bay
                        <Typography className="primary-text text-left coolvetica-regular title2" component={'span'}>
                            &nbsp;Urinal
                        </Typography>
                    </Typography>

                    <Typography className="gray-text small-text myridPro-regular text-left">
                        Reduce waiting lines with our 4 Bay Urinal, allowing four people to use it
                        simultaneously. It is suitable for events and provides convenience for attendees.
                        Contact us for urinal hire.
                    </Typography>

                    <Box sx={CustomBtn.button_wrapper}>
                        <Button sx={flexCenter} className="buttonS" onClick={functions.handleNavigate}>
                            <Typography className=' poppins-medium text-center'>Find Out More</Typography>
                            <MdOutlineKeyboardArrowRight color={themeColors.white} size={18} />
                        </Button>
                    </Box>
                </Grid>
                <Grid item md={5}>
                    <Box className="relative images-wrap image_row">
                        <img src={AppImages.uniral4bay1}  />
                        <img src={AppImages.uniral4bay2}  />
                    </Box>
                </Grid>
            </Grid>

            <Grid spacing={2} sx={[flexCenter]} className='flex_wrapper'>
                <Grid item md={5}>
                    <Box className="relative images-wrap">
                        <img src={AppImages.uniral6bay}  />
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Typography className="secondary-text coolvetica-regular text-left title2 break-word">
                        6 Bay
                        <Typography className="primary-text text-left coolvetica-regular title2" component={'span'}>
                            &nbsp;Urinal
                        </Typography>
                    </Typography>

                    <Typography className="gray-text small-text myridPro-regular text-left">
                        Our 6 Bay Urinal is an easily accessible outdoor urinal that
                        accommodates up to six users at a time. It is a cost-effective option for
                        events with no need for water, sewerage, or electricity connections.
                        Contact us for urinal solutions.
                    </Typography>

                    <Box sx={CustomBtn.button_wrapper}>
                        <Button sx={flexCenter} className="buttonS" onClick={functions.handleNavigate}>
                            <Typography className=' poppins-medium text-center'>Find Out More</Typography>
                            <MdOutlineKeyboardArrowRight color={themeColors.white} size={18} />
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Grid>

        
    )
}

export default EventServices;