import { Box, Fab, Fade, useScrollTrigger } from "@mui/material"
import { BoxStyles } from "../styles/componentStyles"
import { AiOutlineArrowUp } from 'react-icons/ai';

export const MoveToBottom = ({ onClick }) => {
    return (
        <Box className="relative move-bottom-arrow-wrapper" sx={BoxStyles} onClick={onClick}>
            <div class="arrow arrow-first" onClick={onClick} />
            <div class="arrow arrow-second" onClick={onClick} />
        </Box>
    )
}

export const MoveToTop = ({ onClick }) => {
    const trigger = useScrollTrigger({
        target: window,
        disableHysteresis: true,
        threshold: 100,
    });

    return (
        <Fade in={trigger}>
            <Box onClick={onClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }} >
                <Fab size="small" aria-label="scroll back to top">
                    <AiOutlineArrowUp />
                </Fab>
            </Box>
        </Fade>
    );
}