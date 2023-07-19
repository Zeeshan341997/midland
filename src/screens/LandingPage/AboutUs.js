import React from 'react';
import { Grid } from '@mui/material';
import { LandingPageStyles } from '../../styles/pageStyles';
import { AppHeadings } from '../../components/AppHeadings';

const paragraph = `Welcome to Midland Toilet Hire Limited, the leading provider of temporary portable toilet hire in Birmingham and throughout the Midlands. Established in 1974, we take pride in offering the perfect solution for your sanitation needs, combined with unparalleled cleanliness and customer service.
<br/><br/>
As a family-owned business, we are dedicated to ensuring the utmost satisfaction of all our customers. Our on-site toilets are meticulously maintained, guaranteeing cleanliness, comfort, and privacy. We prioritize your personal comfort, safety, and affordability, ensuring that you never have to compromise on quality.
<br/><br/>
At Midland Toilet Hire Limited, we understand the importance of reliable and hygienic portable toilet facilities. Whether you're organizing a construction project, hosting an event, or managing an outdoor gathering, we have the expertise to provide you with the right solution.
<br/><br/>
With our commitment to excellence, Midland Toilet Hire Limited surpasses other portable toilet hire companies in the Midlands. Experience our exceptional service and discover why we are the trusted choice for all your temporary portable toilet needs. Contact us today for a reliable and hassle-free sanitation solution`

const AboutUs = () => {

    return (
        <Grid item md={12} sx={LandingPageStyles.aboutUS} >
            <AppHeadings
                subTitle={'ABOUT US'}
                contentSec1={''}
                contentSec2={'Portable Toilet Hire in Midlands | '}
                contentPri={'Top-Rated'}
                contentPri2={'Midland Toilet Hire Limited'}
                para={paragraph}
                paraClasses={'poppins-medium'}
            />
        </Grid >
    )
}

export default AboutUs;