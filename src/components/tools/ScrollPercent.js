import React from 'react'
import styled from 'styled-components'

const ScrollPercent = () => {

    const updateScrollPercentage = () => {
        const heightOfWindow = window.innerHeight
        const contentScrolled = window.pageYOffset
        const bodyHeight = document.body.offsetHeight
        const percentage = document.querySelector("[data-scrollPercentage] .percentage")

        if (bodyHeight - contentScrolled <= heightOfWindow) {
            percentage.style.width = "100%"
        }
        else {
            const total = bodyHeight - heightOfWindow
            const got = contentScrolled
            const percent = parseInt((got / total) * 100)
            percentage.style.width = percent + "%"
        }
    }

    React.useEffect(() => {
        if (window !== typeof "undefined")
            window.addEventListener('scroll', updateScrollPercentage)
    }, [])

    return (
        <ScrollLine id="scroll-percent" data-scrollPercentage>
            <div className="percentage"></div>
        </ScrollLine>
    )
}

export default ScrollPercent

const ScrollLine = styled.div`
    position   : absolute;
    bottom     : -4px;
    width      : 100vw;
    height     : 4px;
    color      : var(--primary);
    margin     : 0;
    padding    : 0;
    z-index    : 10000000;
    transition : 1s ease;

    &.active {
        top        : 75px;
        transition : 1s ease;
    }

    [data-scrollPercentage] .percentage {
        background-color : var(--primary);
        height           : 4px;
        width            : 0;
        border-radius    : 5px;
    }

    @media(max-width: 992px) {
        top : 70px;

        &.active-mob {
            top        : 50px;
            transition : 1s ease;
        }
    }
`