import { Box } from "@mui/material";
import { BoxStyles } from "../../styles/componentStyles";
import { AppHeadings } from "../../components/AppHeadings";
import { flexCenter } from "../../styles/pageStyles";

const Content = () => {
    return (
        <Box sx={[BoxStyles, flexCenter]}>
            <AppHeadings
                subTitle={'MIDLAND TOILET HIRE'}
                contentSec1={'Documents &'}
                contentPri={'Certificates'}
                para={'We have included this page so that documents we are asked for regularly can be downloaded easily. If you cannot open the file you want you may require Adobe Reader which you can download for free at <a href="#" target="_blank" class="primary-text">www.adobe.com.</a>'}
                paraClasses={'poppins-medium'}
            />
        </Box>
    )
}

export default Content;