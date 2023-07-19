import { Box, Divider} from "@mui/material";
import { BoxStyles } from "../../styles/componentStyles";
import { AppHeadings } from "../../components/AppHeadings";
import { ContactPageStyles, flexCenter } from "../../styles/pageStyles";

const Content = () => {
    return (
        <Box sx={[BoxStyles, flexCenter, ContactPageStyles.content]}>
            <AppHeadings
                subTitle={'MIDLAND TOILET HIRE'}
                contentSec1={'Contact'}
                contentPri={'Us'}
                para={'When you contact midland toilet hire you can be assured of a friendly and professional response.'}
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
                    contentPri={'info@midlandtoilethire.co.uk'}
                />
            </Box>

            <Divider />
        </Box>
    )
}

export default Content;