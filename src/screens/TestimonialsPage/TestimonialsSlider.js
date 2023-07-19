import { Box, Container, Grid, Typography } from "@mui/material";
import { BoxStyles } from "../../styles/componentStyles";
import { TestimonialsPageStyles, flexCenter } from "../../styles/pageStyles";
import { AppImages } from '../../components/AppImages';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-prev-arrow" onClick={onClick}><MdArrowBackIosNew size={34} color="#595A5B" /></div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-next-arrow" onClick={onClick}><MdArrowForwardIos size={34} color="#595A5B" /></div>
    );
};

const TestimonialsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    };

    return (
        <Box sx={[BoxStyles, flexCenter]}>
            <Container maxWidth={'md'} sx={TestimonialsPageStyles.slider}>
                <Grid container>
                    <Grid item md={12}>
                        <Slider {...settings}>
                            {Array.from({ length: 4 })?.map((_, i) => {
                                return (
                                    <Grid key={i} item md={8} className="slide">
                                        <img src={AppImages.customer} alt="customer" height={'auto'} width={'auto'} />
                                        <Typography className="poppins-semibold">"We have worked with Midland Toilet Hire for over ten years. They are a committed and dedicated team who provide an excellent service. When our clients are satisfied, we are satisfied. Thank you Midland Toilet Hire Here's to the next successful decade".</Typography>
                                        <Typography component={'h2'} className="poppins-bold secondary-text">Glyn O Evans Ltd</Typography>
                                    </Grid>
                                )
                            })}
                        </Slider>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default TestimonialsSlider;