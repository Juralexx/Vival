import React, { useEffect } from 'react'

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

    useEffect(() => {
        if (window !== typeof "undefined")
            window.addEventListener('scroll', updateScrollPercentage)
    }, [])

    return (
        <>
            <div id="scroll-percent" data-scrollPercentage>
                <div class="percentage"></div>
            </div>
        </>
    )
}

export default ScrollPercent