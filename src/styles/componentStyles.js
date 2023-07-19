import { borderRadius, themeColors } from "../config/theme";

export const BoxStyles = { maxWidth: '100%', width: '100%' }

export const AppHeaderStyles = {
    appBarStyles: {
        backgroundColor: themeColors.white, py: 1.5,
    },
    logoWrap: {
        flex: 1, justifyContent: 'flex-start', display: 'flex', alignItems: 'center',
        '& img': { height: 'auto', width: 'auto', maxWidth: '100%', objectFit: 'contain' }
    },
    toolbarStyles: {
        padding: '0 !important',
    },
    navItemStyles: {
        display: { lg: 'inline-flex' },
        '& .nav-item': {
            color: themeColors.secondary, textTransform: 'capitalize', px: '10px',
        },
        '& .nav-item-button': {
            color: themeColors.white, textTransform: 'capitalize', backgroundColor: themeColors.secondary,
            borderRadius: borderRadius.rounded, minHeight: 41.2, minWidth: 145, ml: 1, mr: 1.5, border: `2px solid ${themeColors.secondary}`,
            '&:hover': {
                backgroundColor: themeColors.white, color: themeColors.secondary,
            }
        },
        '& .navigation-item': {
            padding: '8px 6px', textDecoration: 'none',
            display: 'inline-flex',
            justifyContent: 'center',
        },
        '& .number-link': {
            textDecoration: 'none',
            '& .number': {
                fontSize: 30, lineHeight: '31px',
                verticalAlign: "middle", pl: 0.8, 
            }
        },
    },
    drawerStyles: {
        height: '100%', display: 'flex', flexDirection: 'column',
        '& .logo': { py: 3, px: 2 },
        '& ul': { flex: 1, justifyContent: 'space-between', py: 3, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
        '& .nav-item': { color: themeColors.secondary, textTransform: 'capitalize', px: 0, mb: 1 },
        '& .nav-item-button': {
            color: themeColors.white, textTransform: 'capitalize', backgroundColor: themeColors.secondary,
            borderRadius: borderRadius.rounded, minHeight: 38, width: 'auto', border: `2px solid ${themeColors.secondary}`,
            fontSize: 12, px: 7, mt: 2,
            '&:hover': {
                backgroundColor: themeColors.white, color: themeColors.secondary,
            }
        },
        '& .number': {
            fontSize: 28, lineHeight: '31px',
            verticalAlign: "middle", pl: 0.8
        }
    }
}

export const AppFooterBaseStyles = {
    container: {
        backgroundColor: themeColors.whiteSmoke, py: 6,
        '& .MuiGrid-container': {
            display: 'flex', justifyContent: 'center',
        },
        '& .MuiBox-root': {
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        },
    },
    title: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', color: themeColors.secondary, fontSize: 60, lineHeight: '65px',
        '& .pri-text': { color: themeColors.primary, fontSize: 60, lineHeight: '65px', }
    },
    inputWrap: {
        width: '100%', mt: 4,
        '& fieldset': {
            border: `none`,
        },
        '& .MuiInputBase-root': {

            width: '100%', borderRadius: borderRadius.inputRound, border: `1px solid ${themeColors.gray}`,
            backgroundColor: themeColors.white, px: 0, overflow: 'hidden',
            '&.Mui-focused fieldset': { borderWidth: 0 },
            '& input': {
                p: 0, minHeight: 70, color: themeColors.inputColor, fontSize: 20, px: 1.5,
                '&::placeholder': { color: themeColors.inputColor, opacity: 1 }
            },
            '& .MuiInputAdornment-positionStart': {
                pl: 2,
            },
            '& img': {
                height: 'auto', width: 'auto', maxWidth: '100%',
            },
            '& .subscribe': {
                backgroundColor: themeColors.secondary, minWidth: '236.7px', minHeight: 70,
                '& p': {
                    color: themeColors.white, fontSize: 20, px: 2
                }
            }
        }
    },
    checkWrap: {
        display: 'flex', alignItems: 'center', flexDirection: 'row !important', pt: 5,
        '& p': {
            color: themeColors.gray, fontSize: 16, pl: 3, textAlign: 'left'
        },
        '& svg:hover': {
            cursor: 'pointer'
        }
    }
}

export const AppFooterStyles = {
    container: {
        pt: 6, pb: 2, backgroundColor: themeColors.white,
        '& .MuiGrid-container': {
            display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',
        },
        '& .bottom-text': {
            color: themeColors.grays2, fontSize: 14,
        },
        '& hr': {
            height: 1, backgroundColor: themeColors.silver2, width: '90%', my: 4
        },
        '& .footer-logo': {
            minWidth: 'auto', height: 'auto', maxWidth: '100%',
        },
        '& .gray-text': {
            fontSize: 14, color: themeColors.gray, textAlign: 'center',
        }
    },
    socialLinks: {
        display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 5, pb: 5,
        '& li': {
             borderRadius: borderRadius.full, backgroundColor: themeColors.cadet,
             mx: 1, p: 1,height: 44, width: 44,
            '& a':{
                height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                '& img': {
                    width: 'auto', height: 'auto', maxWidth: '100%',
                }
            }
        }
    },
    socialContact: {
        display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', gap: 3, flexWrap: 'wrap',
        pt: 0,width:'100%',
        '& li': {
            width: '31%', px: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
            '& p.gray-text': {
                wordBreak: 'break-all', fontSize: 14,width:'100%',
                
                // '&:last-child': {
                //     width: '20%'
                // }
            },
            '& span': {
                textTransform: 'uppercase', fontSize: '20px', color: themeColors.cadet, pb: 1.5, wordBreak: 'break-all'
            },
            '& .image-wrap': {
                minHeight: 90,
                '& img': {
                    width: 'auto', height: 54, maxWidth: '100%', filter: 'brightness(0.5) hue-rotate(40deg)'
                }
            }
        }
    }
}

export const AppHeadingStyles = {
    container: {
        '& .subTitle': { fontSize: 24, lineHeight: '34px', pb: 1 },
        '& .small-text': { fontSize: 21, pt: 4 },
        '& .title': { fontSize: 62, lineHeight: '62px', wordBreak: 'break-word' },
        '& img': { width: 'auto', height: 'auto', maxWidth: '100%', pb: 2 }
    }
}