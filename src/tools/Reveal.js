import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const isSSR = typeof window === 'undefined'
export const scrollreveal = isSSR ? null : ScrollReveal()

const Reveal = (props) => {
    const revealContainer = useRef(null)

    const scrollrevealConfig = () => ({
        origin: props.origin ? props.origin : 'bottom',
        distance: '20px',
        duration: 500,
        delay: props.delay ? props.delay : 200,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.25,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    })

    useEffect(() => {
        scrollreveal.reveal(revealContainer.current, scrollrevealConfig())
    }, [])

    return (
        <div className={props.className} ref={revealContainer}>
            {props.children}
        </div>
    )
}

export default Reveal