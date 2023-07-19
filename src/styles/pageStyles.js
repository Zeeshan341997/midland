import { borderRadius, themeColors } from "../config/theme";

export const flexCenter = {
    display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'
}

export const LandingPageStyles = {
    container: {
        '& img': { width: 'auto', height: 'auto', maxWidth: '100%' },
        '& .home-banner': { position: 'absolute' },
    },
    homeBanner: {
        display: 'flex', pt: '100px !important',
        pb: '100px !important', alignItems: 'center', 
        '& .images-wrap': { display: 'flex', justifyContent: 'center', alignItems: 'center' },
        '& .title': { fontSize: 62, lineHeight: '63px', wordBreak: 'break-word' },
        '& .small-text': { fontSize: 16, pt: 4 },
        '& .nav-item-button': {
            color: themeColors.white, textTransform: 'capitalize', backgroundColor: '#344888',
            borderRadius: borderRadius.rounded, minHeight: 41.2, minWidth: 145, ml: 1, mr: 1.5, border: '2px solid #344888',
            margin: '30px 0 0',TransitionEvent: '.4s',
            '&:hover': {
                backgroundColor: themeColors.white, color: themeColors.secondary,
            }
        },
        '& .zip-code-wrapper': {display: 'flex', flexDirection: 'column', alignItems: 'flex-start',},
        '& h1': { fontSize: 79, lineHeight: '73px', pt: 4,'& a':{textDecoration: 'none'} }
    },
    inputWrap: {
        width: '100%', mt: 4,
        '& .MuiInputBase-root': {
            width: '100%', borderRadius: borderRadius.inputRound, border: `1px solid ${themeColors.gray3}`,
            backgroundColor: themeColors.white, px: 0,
            '&.Mui-focused fieldset, & fieldset': { borderWidth: 0 },
            '& input': {
                p: 0, minHeight: 45, color: themeColors.inputColor, fontSize: 14, pl: 3,
                '&::placeholder': { color: themeColors.gray, opacity: 1 }
            },
            '& .MuiInputAdornment-positionStart': {
                pl: 2.5,
            },
            '& img': {
                height: 'auto', width: 'auto', maxWidth: '100%',
            },
            '& .zip-code-search': {
                backgroundColor: '#324789', minWidth: '175.5px', minHeight: 46, position: 'relative', right: -2,
                borderRadius: borderRadius.half, display: 'flex', alignItems: 'center', justifyContent: 'center',TransitionEvent: '.4s',
                '&:hover':{backgroundColor: themeColors.primary, color: themeColors.white,},
                '& p': {
                    color: themeColors.white, fontSize: 14,
                }
            }
        }
    },
    ourProServices: {
        py: 8,
        '& .ellipse': {
            height: 238, width: 238, borderRadius: borderRadius.full, backgroundColor: themeColors.lightGray,
            '& .img': { width: 'auto', height: 'auto', maxWidth: '100%' }
        },
        '& .service-list': {
            display: 'flex', justifyContent: 'center', alignItems: 'flex-start', pt: 4, flexWrap: 'wrap', gap: 2,
            '& li': { flexDirection: 'column', justifyContent: 'center', width: '25%', mx: 2 },
            '& p': { fontSize: 14, lineHeight: '16px' }
        },
        '& .list-content': {
            mt: 2.5, minHeight: 48, minWidth: 240, borderRadius: borderRadius.round, backgroundColor: themeColors.secondary,
            '&:hover': { cursor: 'pointer' },
        },
        '& .services-video-list': {
            pt: 8,
            '& li': { width: '50%' },
            '&:hover': { cursor: 'pointer' }
        },
        '& .react-player': {
            height: '250px !important', borderRadius: '20px', overflow: 'hidden',
        }
    },
    aboutUS: {
        py: 8,
        '& .small-text': { fontSize: 21, lineHeight: '30px', maxWidth: '90%', margin: '0 auto' }
    },
    allServices: {
        py: 8,
        '& .all-services-list': { gap: '20px', flexWrap: 'wrap', pt: 12 },
        '& li': { borderRadius: borderRadius.half, minHeight: 49, width: 'auto', py: 0, px: 3.5 },
        '& p': { fontSize: 12 }
    }
}

export const ContactPageStyles = {
    container: {
        py: '100px'
    },
    content: {
        '& hr': { my: 8, borderColor: themeColors.gray, width: '100%' },
        '& .content .title': { fontSize: 52, lineHeight: '52px', pb: 2 }
    },
    cotactForm: {
        '& h1': { fontSize: 40, lineHeight: '38px', m: 0 },
        '& form': { py: 6 },
        '& .inputs-wrapper': { justifyContent: 'space-between', mb: 3, gap: '20px' },
        '& .MuiTextField-root': { width: '100%' },
        '& fieldset': { borderRadius: 30, borderWidth: 1, borderColor: themeColors.gray, minHeight: '60.5px' },
        '& .MuiInputBase-root': { pl: 3 },
        '& .MuiInputAdornment-root': { pr: 1 },
        '& input, & textarea': { color: themeColors.black, fontSize: 17, py: '14.5px', '&::placeholder': { color: themeColors.gray } },
        '& textarea': { width: '100%', borderRadius: '14px', borderWidth: 1, borderColor: themeColors.gray, px: 7, py: '14.5px', '&::placeholder': { color: themeColors.gray, opacity: 0.5 } },
        '& .text-area': { position: 'relative', '& img': { position: 'absolute', top: '18px', left: '20px', height: 'auto' }, },
        '& .send-message': { fontSize: 16, lineHeight: '19px', backgroundColor: themeColors.secondary, color: themeColors.white, minHeight: '43px', px: 2, border: 'none', outline: 'none', borderRadius: 21 },
        '& .check-box': { flexWrap: 'nowrap', alignItems: 'flex-start' },
        '& .check-box p': { color: themeColors.gray, fontSize: 17, lineHeight: '24px', pl: 3, '& a': { color: themeColors.secondary, textDecoration: 'underline' } },
        '& button': { mt: 4 }
    }
}

export const DocsPageStyles = {
    container: {
        py: '100px',
    },
    pdfs: {
        '& ul': { gap: '18px', mt: 8 },
        '& .wrapper': { border: `1px solid ${themeColors.gray}`, p: 2 },
        '& .image-wrap': { width: 60, height: 60, border: `1px dashed ${themeColors.black}`, backgroundColor: themeColors.primary },
        '& .content-wrapper': { flex: 1, flexDirection: 'column', pl: 2, alignItems: 'flex-start', display: 'flex' },
    }
}

export const GalleryPageStyles = {
    container: { py: '100px' },
    gallery: {
        mt: 4, display: 'flex', flexWrap: 'wrap', gap: 1,
        '& div': { height: 200 },
        '& img': { objectFit: 'fill', maxWidth: '100%', width: '100%', height: '100%' }
    },

}

export const AboutPageStyles = {
    container: { py: '100px' },
    content: {
        '& .spacer': { my: 15 },
        '& hr': { position: 'absolute', border: `1px solid ${themeColors.darkGray}`, width: '80%', left: '10%' }
    },
    aboutTeam: {
        '& ul': { mt: 10, alignItems: 'flex-start', gap: '38px' },
        '& h3': { fontSize: 25, lineHeight: '26px' },
        '& h6': { fontSize: 13, lineHeight: '14px' },
        '& p': { fontSize: 13, lineHeight: '17px' },
        '& hr': { border: `1px dashed ${themeColors.darkGray}`, width: '100%', my: 3 },
    }
}

export const AreaPageStyles = {
    container: { py: '100px' },
    areaList: {
        alignItems: 'flex-start', my: 8,
        '& ul': { gap: '12px', p: 0, display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'center' },
        '& img': { mt: 2 },
        '& p': { fontSize: 18, lineHeight: '32px' },
        '& li': { p: 0, width: 'auto', }
    }
}

export const TestimonialsPageStyles = {
    container: { py: '100px' },
    slider: {
        pt: 10,
        '& img': { height: 'auto', width: 'auto', maxWidth: '100%', margin: '0 auto' },
        '& p': { fontSize: 16 },
        '& h2': { mt: 5, fontSize: 30, lineHeight: '48px' },
    }
}

export const ConstructionServicesStyle = {
    container: { py: '100px' },
    construction: {
        pb: '100px',pt:'50px',
        '& .flex_wrapper':{justifyContent:'space-between', py:'60px',},
        '& .title': { fontSize: '54px', lineHeight: '63px', wordBreak: 'break-word', mb: '20px'},
        '& p': { fontSize: '20px', lineHeight:'27px', mb: '20px'},
        '& .title2':{fontSize:'34px'},
        '& .image_row':{display:'flex',alignItems:'center',height:'310px',width:'400px',
        '& img':{width:'50%',height:'100%',},
    },
    '& h2': { fontSize: 68, lineHeight: '43px',textAlign:'left', pt: 4,'& a':{textDecoration: 'none'}, },
    },
}

export const CustomBtn = {
    button_wrapper: {
        display:'flex',alignItems:'center',gap:'10px',justifyContent:'flex-start',mt:'30px',
        '& .buttonS': {
            color: themeColors.white, textTransform: 'uppercase', backgroundColor: themeColors.secondary,
            borderRadius: borderRadius.rounded, border: `2px solid ${themeColors.secondary}`,
            TransitionEvent: '.4s', padding:'8px 28px',
            '& p':{margin: 0, fontSize:'13px',},
            '&:hover': {
                backgroundColor: themeColors.white, color: themeColors.secondary,
            }
        },
        '& .buttonP': {
            color: themeColors.white, textTransform: 'uppercase', backgroundColor: themeColors.primary,
            borderRadius: borderRadius.rounded, border: `2px solid ${themeColors.primary}`,
            TransitionEvent: '.4s', padding:'8px 28px',
            '& p':{margin: 0, fontSize:'13px',},
            '&:hover': {
                backgroundColor: themeColors.white, color: themeColors.primary,
            }
        },
    }
}
