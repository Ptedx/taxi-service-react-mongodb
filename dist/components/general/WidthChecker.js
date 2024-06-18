import { useState, useEffect } from "react";
const WidthChecker = (size) => {
    const [isBigScreen, setBigScreen] = useState(window.innerWidth > size);
    useEffect(() => {
        const handleBigScreen = () => {
            setBigScreen(window.innerWidth > size);
        };
        window.addEventListener('resize', handleBigScreen);
        return () => (window.removeEventListener('resize', handleBigScreen));
    }, [isBigScreen, size]);
    return (isBigScreen ? true : false);
};
export default WidthChecker;
