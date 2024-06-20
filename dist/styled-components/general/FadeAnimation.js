import { jsx as _jsx } from "react/jsx-runtime";
import useFadeAnimation from "../../components/general/FadeAnimation";
import { motion } from 'framer-motion';
const FadeAnimation = ({ children }) => {
    const [ref, isIntersecting] = useFadeAnimation({ threshold: 0.25 });
    return (_jsx(motion.div, Object.assign({ ref: ref, initial: { opacity: 0, x: -50 }, animate: isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }, transition: { duration: 2 } }, { children: children })));
};
export default FadeAnimation;
