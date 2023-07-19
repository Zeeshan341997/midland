import React, { useState }  from 'react';
import { Box, FormControl, Grid, InputAdornment, OutlinedInput, Typography, Button } from '@mui/material';
import { BoxStyles } from "../../styles/componentStyles";
import { AppHeadings } from "../../components/AppHeadings";
import { flexCenter } from "../../styles/pageStyles";
import AreaList from "./AreaList";
import { zipcodes } from '../../assets/postcodes/Bpostcode';
import { LandingPageStyles } from '../../styles/pageStyles';



const para1 = `You can find our if we cover your areas either by using the postcode search at the top of the page<br/><br/>
As a general rule of thumb we cover we are able to supply Portable Toilet Hire, Temporary Fencing Hire and Welfare Unit Hire to (in no particular order):`

const para2 = `We are able to deliver events outside the areas available on our website please contact us on <span class="primary-text">0800 999 2820</span> or go to our Contact page for more ways to contact us.<br/><br/>
If we are unable to provide your delivery due to adverse weather, vehicle failure, illness or any other factor, we will inform you of this at the earliest possible opportunity.<br/><br/>
Event Toilet Hire Delivery/Collection – Please ensure you fill in all the booking form including times you are arriving and leaving venues and exact times of start and finish of the event, we will send you a delivery confirmation email prior to your event with our expected delivery and collection times on for home deliveries and collections this could be early morning or late at night.<br/><br/>
Please ensure that there is adequate space for our deliver/collection vehicle or service tanker to park at your location. That there is enough room and access for items supplied by Midland Toilet Hire / Fence Hire for the item to be sited. Portable Toilets require a minimum of a 4 foot access including all gateways and paths, and that you have cleared the area of any mess, debris and skips.<br/><br/>
We will be unable to provide a refund if we cannot deliver your product due to a lack of space or accessibility or due to an inappropriate location and you will be charged as per our Terms of Hire Policy. We NEVER take Portable Toilets through a property.`

const Content = () => {
    const [zipCode, setZipCode] = useState('');
    const [searchResult, setSearchResult] = useState('');

    const functions = {

        // handleNavigate: () => {
        //   navigate('/contact-us');
        // },
    
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
        <Box sx={[BoxStyles, flexCenter]}>

            <AppHeadings
                subTitle={'MIDLAND TOILET HIRE'}
                contentSec1={'What'}
                contentPri={'areas'}
                contentSec2={'do you cover?'}
                para={para1}
                paraClasses={'poppins-medium'}
            />
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

            </Grid>

            <AreaList />
            <AppHeadings
                para={para2}
                paraClasses={'poppins-medium'}
            />
            
        </Box>
    )
}

export default Content;