import React, { useState } from 'react';
import { AppBar, Box, Button, Container, CssBaseline, Divider, Drawer, IconButton, List, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { AiOutlineMenu } from 'react-icons/ai';
import { AppImages } from './AppImages';
import { navItems } from '../config/demoData';
import { drawerWidth } from '../config/variables';
import { themeColors } from '../config/theme';
import { AppHeaderStyles } from '../styles/componentStyles';
import { ElevationScroll } from '../config/helperFunction';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { flexCenter } from '../styles/pageStyles';
import { Link, useNavigate } from 'react-router-dom';

export const AppHeader = (props) => {
    const { window } = props;
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDropdownId, setOpenDropdownId] = useState(null);


    const functions = {
        handleDrawerToggle: () => {
            setMobileOpen((prevState) => !prevState);
        },
        handleClick: (event, itemId) => {
            if (openDropdownId === itemId) {
                setOpenDropdownId(null);
            } else {
                setOpenDropdownId(itemId);
            }
            setAnchorEl(event.currentTarget);
        },
        handleClose: () => {
            setOpenDropdownId(null);
            setAnchorEl(null);
        },
        handleNavigate: () => {
            navigate("/contact-us");
        },
        handleRoute: (route) => {
            functions.handleClose();
            navigate(route);
        }
    }

    const layout = {
        drawer: () => (
            <Box component="nav">
                <Drawer
                    container={container} variant="temporary"
                    open={mobileOpen} onClose={functions.handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={[{
                        display: { md: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }]}
                >
                    <Box sx={AppHeaderStyles.drawerStyles}>
                        <Box className='logo'>
                            <Link to={'/'}>
                                <img src={AppImages.headerLogo} alt='midland toilet hire' height={50} width={'auto'} style={{ maxWidth: '100%' }} />
                            </Link>
                        </Box>
                        <Divider />
                        <List>
                            <div>
                                {navItems.map((item) => {
                                    return (
                                        <>
                                            <Button key={item} onClick={(event) => functions.handleClick(event, item.id)} className="nav-item poppins-medium">
                                                {item.name}{item?.childList && <MdKeyboardArrowDown size={14} color={themeColors.secondary} style={{ marginLeft: 10 }} />}
                                            </Button>
                                            {item?.childList?.length ? (
                                                <Menu
                                                    key={item.childList}
                                                    id={`simple-menu-${item.id}`}
                                                    anchorEl={openDropdownId === item.id ? anchorEl : null}
                                                    keepMounted
                                                    open={openDropdownId === item.id}
                                                    onClose={functions.handleClose}
                                                >
                                                    {item.childList.map((child) => <MenuItem key={child} onClick={() => functions.handleRoute(child?.path)}>{child.name}</MenuItem>)}
                                                </Menu>
                                            ) : null}
                                        </>
                                    )
                                })}
                                <Button className="nav-item-button poppins-medium" onClick={functions.handleNavigate}>{'Contact us'}</Button>
                            </div>
                            <div>

                                <Box sx={flexCenter}>
                                    <img src={AppImages.telIcon} alt="teleplone number" width={'auto'} height={25} />
                                    <Typography component={'span'} className="secondary-text number coolvetica-regular">0800 999 2820</Typography>
                                </Box>
                            </div>
                        </List>
                    </Box>
                </Drawer>
            </Box>
        )
    }

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            <CssBaseline />

            <ElevationScroll {...props}>
                <AppBar component="nav" sx={AppHeaderStyles.appBarStyles}>
                    <Container maxWidth={'lg'}>
                        <Toolbar sx={AppHeaderStyles.toolbarStyles}>

                            <Box sx={AppHeaderStyles.logoWrap}>
                                <Link to={'/'}>
                                    <img src={AppImages.headerLogo} alt='midland toilet hire' />
                                </Link>

                                <IconButton
                                    color="inherit" aria-label="open drawer" edge="start"
                                    onClick={functions.handleDrawerToggle} sx={{ display: { lg: 'none' } }}
                                >
                                    <AiOutlineMenu size={22} color={themeColors.secondary} />
                                </IconButton>
                            </Box>

                            <Box sx={AppHeaderStyles.navItemStyles}>
                                {navItems.map((item) => {
                                    return (
                                        <>
                                            <Button key={item} onClick={(event) => functions.handleClick(event, item.id)} className="nav-item poppins-medium">
                                                {item.name}{item?.childList && <MdKeyboardArrowDown size={14} color={themeColors.secondary} style={{ marginLeft: 10 }} />}
                                            </Button>
                                            {item?.childList?.length ? (
                                                <Menu
                                                    key={item.childList}
                                                    id={`simple-menu-${item.id}`}
                                                    anchorEl={openDropdownId === item.id ? anchorEl : null}
                                                    keepMounted
                                                    open={openDropdownId === item.id}
                                                    onClose={functions.handleClose}
                                                >
                                                    {item.childList.map((child) => <MenuItem key={child} onClick={() => functions.handleRoute(child?.path)}>{child.name}</MenuItem>)}
                                                </Menu>
                                            ) : null}
                                        </>
                                    )
                                })}
                                {/* <Link to={'/construction-services'} className="nav-item poppins-medium navigation-item">{'Construction Services'}</Link> */}
                                {/* <Link to={'/event-services'} className="nav-item poppins-medium navigation-item">{'Event Services'}</Link> */}
                                <Link to={'/post-code-search'} className="nav-item poppins-medium navigation-item">{'Post Code Search'}</Link>
                                <Button className="nav-item-button poppins-medium" onClick={functions.handleNavigate}>{'Contact us'}</Button>
                                <Box component="a" sx={flexCenter} href="tel:08009992820" className='number-link'>
                                    <img src={AppImages.telIcon} alt="teleplone number" width={'auto'} height={25} />
                                    <Typography component={'span'} className="secondary-text number coolvetica-regular">0800 999 2820</Typography>
                                </Box>

                            </Box>

                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>

            {layout.drawer()}

        </Box>
    );
}
