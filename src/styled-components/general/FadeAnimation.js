import useFadeAnimation from "../../components/general/FadeAnimation.js";
import { motion } from 'framer-motion'

const FadeAnimation = ({children})=>{
    const [ref, isIntersecting] = useFadeAnimation({threshold: 0.5})
    return(
        
        <motion.div
            ref={ref}
            initial={{opacity: 0, x:-50}}
            animate = {isIntersecting? {opacity:1, x:0}: {opacity: 0, x:-50}}
            transition={{duration: 2}}
        >
            {children}
        </motion.div>
    )
}

export default FadeAnimation