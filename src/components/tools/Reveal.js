import React from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';

const isSSR = typeof window === 'undefined'
export const scrollreveal = isSSR ? null : ScrollReveal()

const Reveal = (props) => {
    const revealContainer = React.useRef(null)
    const [shouldReveal, setShouldReveal] = React.useState(true)

    let revealConfig = {
        origin: props.origin ? props.origin : 'bottom',
        distance: '20px',
        duration: 500,
        delay: props.delay ? props.delay : 200,
        rotate: { x: 0, y: 0, z: 0 },
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        useDelay: 'once',
        reset: false,
        viewFactor: 0.25,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
    }

    const revealStorage = localStorage.getItem('revealed')

    if (!revealStorage) {
        localStorage.setItem('revealed', 1)
    }

    const onBeforeUnload = () => localStorage.removeItem('revealed')

    React.useEffect(() => {
        if (revealStorage <= Object.keys(scrollreveal.store.elements).length)
            revealConfig = { ...revealConfig, opacity: 0 }
        else {
            revealConfig = { ...revealConfig, opacity: 1 }
            setShouldReveal(false)
        }
    }, [revealStorage])

    const scrollrevealConfig = () => (revealConfig)

    React.useEffect(() => {
        if (revealStorage) {
            const inc = (parseInt(localStorage.getItem('revealed')) + 1)
            localStorage.setItem('revealed', inc)
        }
        if (revealStorage <= Object.keys(scrollreveal.store.elements).length) {
            scrollreveal.reveal(revealContainer.current, scrollrevealConfig())
        }
        window.addEventListener('beforeunload', onBeforeUnload)
        return () => window.removeEventListener('beforeunload', onBeforeUnload)
    }, [])

    return (
        <RevealerContainer
            className={props.className}
            ref={revealContainer}
            shouldReveal={shouldReveal}
        >
            {props.children}
        </RevealerContainer>
    )
}

export default Reveal

const RevealerContainer = styled.div`
    visibility: ${props => props.shouldReveal ? 'hidden' : 'visible'};
`