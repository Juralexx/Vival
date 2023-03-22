import React from "react";
import styled from "styled-components";

const Parallax = () => {
    React.useEffect(() => {
        const parallax = document.getElementById('parallax');

        const onWindowScroll = () => {
            window.requestAnimationFrame(() => {
                const { offsetTop, clientHeight } = parallax
                const isFullyVisible = (offsetTop < (window.scrollY + clientHeight)) && ((offsetTop + clientHeight) > window.scrollY)
                const isPartiallyVisible = (offsetTop < (window.scrollY + clientHeight)) || ((offsetTop + clientHeight) > window.scrollY)
                if (isFullyVisible || isPartiallyVisible) {
                    const speed = 0.3;
                    const newY = (offsetTop - window.pageYOffset) * speed;
                    parallax.style.backgroundPosition = `100% ${newY / 2.5}%`;
                }
            });
        };

        window.addEventListener('scroll', onWindowScroll)
        return () => window.removeEventListener('scroll', onWindowScroll)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ParallaxContainer id='parallax'>
            <p><span>Nous vendons divers articles</span> <br />dont les ménages ont besoin quotidiennement.</p>
        </ParallaxContainer>
    )
}

export default Parallax

const ParallaxContainer = styled.div`
    height                : 600px;
    width                 : 100%;
    position              : relative;
    display               : flex;
    align-items           : center;
    justify-content       : center;
    margin                : 0;
    padding               : 0;
    z-index               : 1;
    background-image      : url('/img/parallax.jpg');
    background-repeat     : no-repeat;
    background-size       : cover;
    clip-path             : polygon(100% 0, 100% 90%, 0 100%, 0 10%);

    &:before {
        content          : "";
        position         : absolute;
        top              : 0;
        right            : 0;
        bottom           : 0;
        left             : 0;
    }

    p {
        color      : white !important;
        text-align : center;
        font-size  : 22px;
        line-height: 50px;

        span {
            font-size     : 40px;
            font-weight   : bold;
        }
    }

    img {
        width   : 200px;
        height  : 210px;
        margin  : 150px auto;
        z-index : 1;
    }
`