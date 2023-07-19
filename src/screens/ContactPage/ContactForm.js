import { Box, Grid, InputAdornment, TextField, TextareaAutosize, Typography, Button } from "@mui/material";
import { BoxStyles } from "../../styles/componentStyles";
import { ContactPageStyles, flexCenter } from "../../styles/pageStyles";
import { useState } from "react";
import { AppImages } from "../../components/AppImages";
import { RiCheckboxFill, RiCheckboxBlankLine } from 'react-icons/ri';
import { themeColors } from "../../config/theme";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [enquiryType, setEnquiryType] = useState("");
  const [aboutUs, setAboutUs] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("companyName", companyName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("enquiryType", enquiryType);
    formData.append("aboutUs", aboutUs);

    try {
      // Send the form data to the server-side script
      const response = await fetch("/leads/mail.php", {
        method: "POST", 
        body: formData,
      });

      if (response.ok) {
        // Form submission successful
        console.log("Form submitted successfully");
      } else {
        // Form submission failed
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("An error occurred during form submission", error);
    }
  };

  return (
    <Box sx={[BoxStyles, ContactPageStyles.cotactForm]}>
        <Typography component={'h1'} className="coolvetica-regular secondary-text">CONTACT FORM</Typography>

        <Box sx={[BoxStyles, flexCenter]}>
            <form style={BoxStyles} onSubmit={handleSubmit}>
                <Grid item md={12} sx={flexCenter} className="inputs-wrapper">
                    <Grid item md={5.8} className="input">
                        <InputField value={name} onChange={setName} placeholder="Your Name" image={AppImages.inputUserIcon} />
                    </Grid>
                    <Grid item md={5.8} className="input">
                        <InputField value={companyName} onChange={setCompanyName} placeholder="Company Name" image={AppImages.inputUserIcon} />
                    </Grid>
                </Grid>
                <Grid item md={12} sx={flexCenter} className="inputs-wrapper">
                    <Grid item md={5.8} className="input">
                        <InputField value={phone} onChange={setPhone} placeholder="Your Number" image={AppImages.inputNumberIcon} />
                    </Grid>
                    <Grid item md={5.8} className="input">
                        <InputField value={email} onChange={setEmail} placeholder="Your Email" image={AppImages.inputEmailIcon} />
                    </Grid>
                </Grid>
                <Grid item md={12} sx={flexCenter} className="inputs-wrapper">
                    <InputField value={address} onChange={setAddress} placeholder="Area/location of job" image={AppImages.inputAddress} />
                </Grid>
                <Grid item md={12} sx={flexCenter} className="inputs-wrapper">
                    <Grid item md={5.8} className="input">
                        <InputField value={enquiryType} onChange={setEnquiryType} placeholder="Type of enquiry.." />
                    </Grid>
                    <Grid item md={5.8} className="input">
                        <InputField value={aboutUs} onChange={setAboutUs} placeholder="How did you heard about us?" />
                    </Grid>
                </Grid>

                <Grid item md={12} sx={flexCenter} className="inputs-wrapper text-area">
                    <img src={AppImages.inputTextAreaIcon} alt={"How did you heard about us?"} height={'auto'} width={'auto'} />
                    <TextareaAutosize minRows={6} placeholder="How can we help?" className="poppins-medium" />
                </Grid>

                <Grid item md={12}>
                    <Box sx={[BoxStyles, flexCenter]} className="check-box">
                        {!isCheck ? <RiCheckboxBlankLine color={themeColors.silver} size={22} onClick={() => setIsCheck(!isCheck)} /> : <RiCheckboxFill color={themeColors.silver} size={22} onClick={() => setIsCheck(!isCheck)} />}
                        <Typography className='poppins-medium'>I consent to the processing of my personal data and agree with the <a href="#" target="_blank" rel="noreferrer">Privacy Policy.</a></Typography>
                    </Box>

                    <Button className="uppercase white-text poppins-medium send-message" type="submit">SEND MESSAGE</Button>
                </Grid>
            </form>
        </Box>
    </Box>
  );
};

export default ContactForm;

const InputField = ({ value, onChange, placeholder, image }) => {
    return (
        <TextField
            value={value} onChange={(e) => onChange(e?.target?.value)}
            id="outlined-basic" hiddenLabel variant="outlined" placeholder={placeholder}
            InputProps={image && { startAdornment: <InputAdornment position="start"><img src={image} alt={placeholder} height={'auto'} width={'auto'} /></InputAdornment> }}
            className="poppins-medium"
        />
    )
}
