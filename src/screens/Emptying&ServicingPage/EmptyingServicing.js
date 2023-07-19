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
        // handleNavigate: () => {
        //     navigate('/contact-us');
        // },
        handleNavigate2: () => {
            navigate('/post-code-search');
        },
    };

    return (
        <Grid container sx={[ ConstructionServicesStyle.construction]}>
            <Grid spacing={2} sx={[flexCenter]} className='flex_wrapper'>
                <Grid item md={6}>
                    <Typography className="secondary-text coolvetica-regular text-left title break-word">
                        Emptying
                        <Typography className="primary-text text-left coolvetica-regular title" component={'span'}>
                            &nbsp;&&nbsp;
                        </Typography>
                        Servicing
                    </Typography>

                    <Typography className="gray-text small-text myridPro-regular text-left">
                        This is content for Emptying and Servicing "We specialize in delivering fast and dependable services in the following areas:
                        <br/>
                        <br/>
                        <Typography className="gray-text small-text myridPro-regular text-left">
                            Our dedicated office team is always available to address any inquiries you may have concerning third-party servicing. Operational Scope:
                        </Typography>

                        <Typography>
                            <ul>
                                <li>Customer-Owned Portable Toilets</li>
                                <li>Welfare Units (such as groundhog or static units)</li>
                                <li>Effluent Tanks</li>
                                <li>Waste Holding Tanks</li>
                                <li>Septic Tanks</li>
                            </ul>
                            By offering these comprehensive services, we aim to provide efficient solutions while maintaining the highest level of customer satisfaction.
                        </Typography>
                    </Typography>

                    <Box sx={CustomBtn.button_wrapper}>
                        {/* <Button sx={flexCenter} className="buttonS" onClick={functions.handleNavigate}>
                            <Typography className=' poppins-medium text-center'>Find Out More</Typography>
                            <MdOutlineKeyboardArrowRight color={themeColors.white} size={18} />
                        </Button> */}

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
                    <Box className="relative images-wrap emptyingServeImg">
                        <img src={AppImages.EmptyingServicing} />
                    </Box>
                </Grid>
            </Grid>

            <Divider/>


        </Grid>

        
    )
}

export default EventServices;