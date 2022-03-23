import { useState, useEffect } from 'react';

const TABLET_BREAKPOINT = 768;
const DESKTOP_BREAKPOINT = 992;
const DESKTOPXL_BREAKPOINT = 1200;

const useScreenSize = () => {
    const [width, setWidth] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    if (!width) {
        return null;
    }

    return {
        width,
        isMobile: width < TABLET_BREAKPOINT,
        isTablet: width >= TABLET_BREAKPOINT && width < DESKTOP_BREAKPOINT,
        isDesktop: width >= DESKTOP_BREAKPOINT && width < DESKTOPXL_BREAKPOINT,
        isDesktopXL: width >= DESKTOPXL_BREAKPOINT,
    };
};

export default useScreenSize;