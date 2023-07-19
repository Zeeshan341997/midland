import { Box, Divider } from "@mui/material";
import { BoxStyles } from "../../styles/componentStyles";
import { AppHeadings } from "../../components/AppHeadings";
import { AboutPageStyles, ContactPageStyles, flexCenter } from "../../styles/pageStyles";

const paragraph = "Welcome to Midland Toilet Hire Limited, the leading provider of temporary portable toilet hire in Birmingham and throughout the Midlands. Established in 1974, we take pride in offering the perfect solution for your sanitation needs, combined with unparalleled cleanliness and customer service.<br /><br />As a family-owned business, we are dedicated to ensuring the utmost satisfaction of all our customers. Our on-site toilets are meticulously maintained, guaranteeing cleanliness, comfort, and privacy. We prioritize your personal comfort, safety, and affordability, ensuring that you never have to compromise on quality<br /><br />At Midland Toilet Hire Limited, we understand the importance of reliable and hygienic portable toilet facilities. Whether you're organizing a construction project, hosting an event, or managing an outdoor gathering, we have the expertise to provide you with the right solution.<br /><br />With our commitment to excellence, Midland Toilet Hire Limited surpasses other portable toilet hire companies in the Midlands. Experience our exceptional service and discover why we are the trusted choice for all your temporary portable toilet needs. Contact us today for a reliable and hassle-free sanitation solution"


const Content = () => {
    return (
        <>
            <Box sx={[BoxStyles, flexCenter, AboutPageStyles.content]}>
                <AppHeadings
                    subTitle={'WHO WE ARE'}
                    contentSec1={'About'}
                    contentPri={'Midland Toilet Hire'}
                    para={paragraph}
                    paraClasses={'poppins-medium'}
                />

                <Box sx={[BoxStyles]} className="spacer">
                    <Divider />
                </Box>

                {/* <AppHeadings
                contentSec1={'Meet the'}
                contentPri={'Team'}
                para={'Our aim is to provide a reliable, personal and professional service as well as adhering to all health and safety standards. With our experience we can ensure you have the correct facilities for your construction site or event.'}
                paraClasses={'poppins-medium'}
            /> */}
            </Box>
            <Box sx={[BoxStyles, flexCenter, ContactPageStyles.content]}>
                <AppHeadings
                    subTitle={'MIDLAND TOILET HIRE'}
                    contentSec1={'OUR COMPANY'}
                    para={'Our toilets are available when you need them. Midland Toilet Hire. provides on time delivery and pickup of portable toilets across the Midlands.'}
                    paraClasses={'poppins-medium'}
                />

                <Divider />

                <Box sx={BoxStyles} className="content">
                    <AppHeadings
                        contentSec1={'Call:'}
                        contentPri={'0800 999 2820'}
                    />
                    <AppHeadings
                        contentSec1={'Email:'}
                        contentPri={'admin@midlandtoilethire.com'}
                    />
                </Box>

                <Divider />
            </Box>
        </>
    )
}

export default Content;