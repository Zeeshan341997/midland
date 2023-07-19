import { cloneElement } from 'react';
import { useScrollTrigger } from '@mui/material';

export const ElevationScroll = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return cloneElement(children, { elevation: trigger ? 4 : 0 });
};

export const scrollDown = (ref) => {
    const scrollableElement = ref.current;
    if (scrollableElement) {
        window.scrollTo({
            top: scrollableElement.offsetTop + scrollableElement.offsetHeight,
            behavior: 'smooth',
        });
    }
};

export const scrollTop = (ref) => {
    const scrollableElement = ref.current;
    if (scrollableElement) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
};