import { useEffect, useRef, useState, RefObject } from "react"

interface optionsProps{
    threshold: number
}

const useFadeAnimation = (options:optionsProps): [RefObject<HTMLDivElement>, boolean]=>{
    const [isIntersecting, setIntersecting] = useState<boolean>(false)
    const referredElement = useRef<HTMLDivElement>(null)
    
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setIntersecting(entry.isIntersecting)
        },options)

        const currentElement = referredElement.current
        if(currentElement){
            observer.observe(currentElement)
        }
        return()=>{
            if (currentElement){
                observer.unobserve(currentElement)
            }
        }
        
    },[options])

    return [referredElement, isIntersecting]
}

export default useFadeAnimation