import React from 'react';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { AppImages } from '../../components/AppImages';
import { ConstructionServicesStyle, CustomBtn, flexCenter } from '../../styles/pageStyles';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { themeColors } from '../../config/theme';
import { useNavigate } from 'react-router-dom';


const ConstructionServices = () => {

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
                        Construction Toilet
                        <Typography className="primary-text text-left coolvetica-regular title" component={'span'}>
                            &nbsp;Hire,&nbsp;
                        </Typography>
                    </Typography>

                    <Typography className="gray-text small-text myridPro-regular text-left">
                        If you're a builder or tradesman looking to hire a construction toilet, we can provide peace of mind and make 
                        sure you don't get caught short. Our HSE compliant portable toilets are delivered and maintained by our NSQ 
                        trained service operatives in a prompt and reliable manner.
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
                </Grid>
                <Grid item md={5}>
                    <Box className="relative images-wrap">
                        <img src={AppImages.homeBanner}/>
                    </Box>
                </Grid>
            </Grid>

            <Divider/>

            <Grid spacing={2} sx={[flexCenter]} className='flex_wrapper'>
                <Grid item md={5}>
                    <Box className="relative images-wrap">
                        <img src={AppImages.hotwash}/>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Typography className="secondary-text coolvetica-regular text-left title2">
                        Hot
                        <Typography className="primary-text text-left coolvetica-regular title2" component={'span'}>
                            Wash
                        </Typography>
                    </Typography>

                    <Typography className="gray-text small-text myridPro-regular text-left">
                        Our Hot Wash: strong, lightweight, low-maintenance. Customizable options. Instantaneous 
                        3kW water heater, forearm-sized sink. Full RCD/MCB protection, compliant with latest IEE regulations.
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
                        Portable Mains
                        <Typography className="primary-text text-left coolvetica-regular title2" component={'span'}>
                            &nbsp;Connect
                        </Typography>
                    </Typography>

                    <Typography className="gray-text small-text myridPro-regular text-left">
                        Mains connected portable toilets suitable for long-term building projects
                        with access to mains drainage, water, and electricity. These toilets provide
                        a fully flushing system without the need for blue chemical. Contact us for
                        more information.
                    </Typography>

                    <Box sx={CustomBtn.button_wrapper}>
                        <Button sx={flexCenter} className="buttonS" onClick={functions.handleNavigate}>
                            <Typography className=' poppins-medium text-center'>Find Out More</Typography>
                            <MdOutlineKeyboardArrowRight color={themeColors.white} size={18} />
                        </Button>
                    </Box>
                </Grid>
                <Grid item md={5}>
                    <Box className="relative images-wrap">
                        <img src={AppImages.portableMainsConnect}/>
                    </Box>
                </Grid>
            </Grid>

            <Grid spacing={2} sx={[flexCenter]} className='flex_wrapper'>
                <Grid item md={5}>
                    <Box className="relative images-wrap image_row">
                        <img src={AppImages.freshFlush1}/>
                        <img src={AppImages.freshFlush2}/>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Typography className="secondary-text coolvetica-regular text-left title2 break-word">
                        Fresh Flush
                        <Typography className="primary-text text-left coolvetica-regular title2" component={'span'}>
                            &nbsp;Toilet
                        </Typography>
                    </Typography>

                    <Typography className="gray-text small-text myridPro-regular text-left">
                        Fresh Flush VIP toilets provide a luxury portable toilet experience with
                        a fresh flushing system, stainless steel bowl, built-in sink unit,
                        overhead solar light, and more. It offers comfort and hygiene.
                        Contact us for fresh flush toilet hire.
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

export default ConstructionServices;