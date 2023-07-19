import React, { useState } from 'react';
import { Box, FormControl, Grid, InputAdornment, OutlinedInput, Typography, Button } from '@mui/material';
import { AppImages } from '../../components/AppImages';
import { LandingPageStyles } from '../../styles/pageStyles';
import { useNavigate } from 'react-router-dom';
import { zipcodes } from '../../assets/postcodes/Bpostcode';

const Banner = () => {
  const [zipCode, setZipCode] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const navigate = useNavigate();

  const functions = {

    handleNavigate: () => {
      navigate('/contact-us');
    },

    handleSearch: (event) => {
      if (event) {
        event.preventDefault();
      }

      if (zipCode.trim() === '') {
        setSearchResult('Please enter a code.');
        return;
      }

      const enteredCode = zipCode.trim().substring(0, 3); // Get the first two characters of the entered zip code

      let found = false;
      for (let i = 0; i < zipcodes.length; i++) {
        const code = zipcodes[i];
        if (code.startsWith(enteredCode)) {
          found = true;
          break;
        }
      }

      if (found) {
        setSearchResult('Great news! We provide services in your area');
      } else {
        setSearchResult('We regret to inform you that we currently do not offer portable toilet services in your area associated with the provided post code. We apologize for any inconvenience caused.');
      }
    },
    handleKeyPress: (event) => {
      if (event.key === 'Enter') {
        functions.handleSearch(event);
      }
    },
  };

  return (
    <Grid item md={12} sx={LandingPageStyles.homeBanner}>
      <Grid item md={6}>
        <Typography className="secondary-text coolvetica-regular text-left title break-word">
          Efficient Delivery and Exceptional Service: Your
          <Typography className="secondary-text text-left coolvetica-regular title" component={'span'}>
            &nbsp;Satisfaction,&nbsp;
          </Typography>
          Our
          <Typography className="secondary-text text-left coolvetica-regular title" component={'span'}>
            &nbsp;Priority
          </Typography>
        </Typography>

        <Typography className="gray-text small-text myridPro-regular text-left">
          Midland Toilet Hire Ltd caters to a wide array of events, offering an all-encompassing collection of portable toilets and welfare facilities.
        </Typography>

        <Grid item md={10} className='zip-code-wrapper'>
          <FormControl sx={LandingPageStyles.inputWrap} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder="Search ...."
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <Button className="zip-code-search poppins-medium">
                    <Typography onClick={functions.handleSearch}>Post Code Search</Typography>
                  </Button>
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography id="result" component={'div'} className="secondary-text coolvetica-regular">
            {searchResult}
          </Typography>

          <Button className="nav-item-button poppins-medium" onClick={functions.handleNavigate}>
            {'Contact us'}
          </Button>

          <Typography component={'h1'} className="secondary-text coolvetica-regular">
              <a href="tel:08009992820" className="secondary-text">0800 999 2820</a>
          </Typography>

        </Grid>
      </Grid>
      <Grid item md={6} sx={{ display: { md: 'inline-flex', xs: 'none' } }}>
        <Box className="relative images-wrap">
          <img src={AppImages.ellipse} alt="ellipse" />
          <img src={AppImages.homeBanner} alt="home-banner" className="home-banner" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
