import { Box, Grid, List, Typography } from "@mui/material";
import { BoxStyles } from "../../styles/componentStyles";
import { DocsPageStyles, flexCenter } from "../../styles/pageStyles";
import { documentCertificates } from "../../config/demoData";
import { AppImages } from "../../components/AppImages";

const Pdfs = () => {

    const handleEmailClick = () => {
        const email = 'admin@midlandtoilethire.com';
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
    };

    return (
        <Box sx={[BoxStyles, flexCenter, DocsPageStyles.pdfs]}>
            <List sx={flexCenter}>
                {documentCertificates?.map((item) => {
                    return (
                        item?.type === 'email' ?
                            <Grid component={'a'} href={require('../../assets/pdfs/terms___conditions_of_hire_october_2015.pdf')} target="_blank" md={4.5} sx={[flexCenter, {textDecoration: 'none'}]} className="wrapper">
                                <div className="image-wrap" style={flexCenter}>
                                    <img src={AppImages.pdfIcon} alt="pdf" height={'auto'} width={'auto'} />
                                </div>
                                <div className="content-wrapper">
                                    <Typography className="text-left coolvetica-regular secondary-text" component={'h5'}>{item?.name}</Typography>
                                    <Typography className="text-left poppins-medium primary-text">{'DOWNLOAD FILE'}</Typography>
                                </div>
                            </Grid> :
                            <Grid md={4.5} sx={flexCenter} className="wrapper" onClick={handleEmailClick}>
                                <div className="image-wrap" style={flexCenter}>
                                    <img src={AppImages.pdfIcon} alt="pdf" height={'auto'} width={'auto'} />
                                </div>
                                <div className="content-wrapper">
                                    <Typography className="text-left coolvetica-regular secondary-text" component={'h5'}>{item?.name}</Typography>
                                    <Typography className="text-left poppins-medium primary-text">{'DOWNLOAD FILE'}</Typography>
                                </div>
                            </Grid>
                    )
                })}
            </List>
        </Box>
    )
}

export default Pdfs;