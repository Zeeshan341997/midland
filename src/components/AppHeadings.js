import { Box, Typography } from "@mui/material"
import { AppHeadingStyles } from "../styles/componentStyles"

export const AppHeadings = ({ subTitle, contentPri, contentSec1, contentSec2, para, image, alt, paraClasses="", contentPri2 }) => {
    return (
        <Box sx={AppHeadingStyles.container}>
            {image && <img src={image} alt={alt} />}
            {subTitle && <Typography className="primary-text poppins-medium uppercase subTitle text-center">{subTitle}</Typography>}
            {(contentPri || contentSec1 || contentSec2) &&
                <Typography className="secondary-text coolvetica-regular title text-center">
                    {contentSec1}&nbsp;
                    <Typography component={'span'} className="primary-text coolvetica-regular title text-center">{contentPri}</Typography>
                    &nbsp;{contentSec2}&nbsp;
                    <Typography component={'span'} className="primary-text coolvetica-regular title text-center">{contentPri2}</Typography>
                </Typography>
            } 
            {para && <Typography className={`gray-text small-text myridPro-regular text-center ${paraClasses}`} dangerouslySetInnerHTML={{__html: para}} />}
        </Box>
    )
}