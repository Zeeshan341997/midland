import { Box } from "@mui/material";
import { BoxStyles } from "../../styles/componentStyles";
import { AppHeadings } from "../../components/AppHeadings";
import { flexCenter } from "../../styles/pageStyles";

const Content = () => {
    return (
        <Box sx={[BoxStyles, flexCenter]}>
            <AppHeadings
                subTitle={'MIDLAND TOILET HIRE'}
                contentSec1={'Customer'}
                contentPri={'Testimonials'}
                para={"Midland Toilet Hire are passionate about providing the best level of customer service."}
                paraClasses={'poppins-medium'}
            />
        </Box>
    )
}

export default Content;