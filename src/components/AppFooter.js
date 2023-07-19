import React, { useState } from 'react';
import { Box, Container, Divider, FormControl, Grid, InputAdornment, List, ListItem, OutlinedInput, Typography } from "@mui/material";
import { AppFooterBaseStyles, AppFooterStyles, BoxStyles } from "../styles/componentStyles";
import { AppImages } from "./AppImages";
import { RiCheckboxFill, RiCheckboxBlankLine } from 'react-icons/ri';
import { themeColors } from '../config/theme';
import { socialContact, socialLinks } from '../config/demoData';
import { AppHeadings } from './AppHeadings';

export const AppFooterBase = () => {

    const [email, setEmail] = useState('')
    const [isCheck, setIsCheck] = useState(false)

    return (
        <Box sx={AppFooterBaseStyles.container}>
            <Container maxWidth={'lg'}>
                <Box sx={BoxStyles}>
                    <Grid container>
                        <Grid item md={8}>
                            <AppHeadings
                                image={AppImages.mail}
                                alt={"latest news"}
                                subTitle={'LATEST NEWS'}
                                contentSec1={'Latest News'}
                                contentPri={'&'}
                                contentSec2={'Updates'}
                            />

                            <FormControl sx={AppFooterBaseStyles.inputWrap} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    placeholder='Enter Your Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    startAdornment={<InputAdornment position="start"><img src={AppImages.emailIcon} alt="email" /></InputAdornment>}
                                    endAdornment={<InputAdornment position="end"><Box className="subscribe poppins-medium"><Typography>Subscribe</Typography></Box></InputAdornment>}
                                />
                            </FormControl>

                            <Box sx={AppFooterBaseStyles.checkWrap}>
                                {!isCheck ? <RiCheckboxBlankLine color={themeColors.silver} size={22} onClick={() => setIsCheck(!isCheck)} /> : <RiCheckboxFill color={themeColors.silver} size={22} onClick={() => setIsCheck(!isCheck)} />}
                                <Typography className='poppins-medium'>I consent to the processing of my personal data and agree with the Privacy Policy.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export const AppFooter = () => {

    const date = new Date().getFullYear()
    return (
        <Box sx={AppFooterStyles.container}>
            <Container maxWidth={'lg'}>
                <Box sx={BoxStyles}>
                    <Grid container>
                        <Grid item md={12} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap' }}>
                            <Grid md={2.5}>
                                <img src={AppImages.footerLogo} className='footer-logo' alt="midland toilet hire" />
                                <List sx={AppFooterStyles.socialLinks}>
                                    {socialLinks?.map((item) => <ListItem><a href={item?.href} target="__blank"><img src={item.image} alt={item?.name} /></a></ListItem>)}
                                </List>
                                <Typography className='poppins-regular gray-text'>Website Terms of Use<br />Cookie Policy<br />Privacy Policy<br />Data Protection Policy</Typography>
                            </Grid>
                            <Grid md={9}>
                                <List sx={AppFooterStyles.socialContact}>
                                    {socialContact?.map((item) => <ListItem>
                                        <Box className="image-wrap">
                                            <img src={item?.image} alt={item?.name} />
                                        </Box>
                                        <Typography component={'span'} className='poppins-bold'>{item?.name}</Typography>
                                        <Typography className='poppins-regular gray-text'>{item?.content}</Typography>
                                    </ListItem>)}
                                </List>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid item>
                            <Typography className='poppins-regular bottom-text'>
                                MidlandToiletHire © {date}. ALL RIGHTS RESERVED | POWERED BY Tech Consulting Solutions
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}