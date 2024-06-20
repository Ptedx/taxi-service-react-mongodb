import { useEffect, useRef, useState } from "react";
const useFadeAnimation = (options) => {
    const [isIntersecting, setIntersecting] = useState(false);
    const referredElement = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        }, options);
        const currentElement = referredElement.current;
        if (currentElement) {
            observer.observe(currentElement);
        }
        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options]);
    return [referredElement, isIntersecting];
};
export default useFadeAnimation;
