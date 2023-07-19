import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { BoxStyles } from "../../styles/componentStyles";
import { AreaPageStyles, flexCenter } from "../../styles/pageStyles";
import { AppImages } from "../../components/AppImages";
import { areas } from "../../config/demoData";

const AreaList = () => {
    return (
        <Box sx={[BoxStyles, flexCenter, AreaPageStyles.areaList]}>
            <Grid item md={3}>
                <List>
                    {areas?.map((item) => {
                        return (
                            <ListItem>
                                <Typography className="poppins-medium gray-text">{item}</Typography>
                            </ListItem>
                        )
                    })}
                </List>
            </Grid>
            <Grid item md={9}>
                <img src={AppImages.map} alt="map" height={'auto'} width={'auto'} />
            </Grid>
        </Box>
    )
}

export default AreaList;