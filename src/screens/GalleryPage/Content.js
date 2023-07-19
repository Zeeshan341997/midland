import { Box } from "@mui/material";
import { BoxStyles } from "../../styles/componentStyles";
import { AppHeadings } from "../../components/AppHeadings";
import { flexCenter } from "../../styles/pageStyles";

const Content = () => {
    return (
        <Box sx={[BoxStyles, flexCenter]}>
            <AppHeadings
                subTitle={'MIDLAND TOILET HIRE'}
                contentSec1={'Photo'}
                contentPri={'Gallery'}
                para={'A selection of photos from various events and construction sites.'}
                paraClasses={'poppins-medium'}
            />
        </Box>
    )
}

export default Content;