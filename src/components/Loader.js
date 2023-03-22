import React from 'react'
import styled from 'styled-components'

const Loader = ({ className }) => {
    return (
        <StyledLoader className={className}>
            <img src='/img/logo.png' alt="" />
        </StyledLoader>
    )
}

export default Loader

const StyledLoader = styled.div`
    position   : fixed;
    top        : 0;
    bottom     : 0;
    left       : 0;
    right      : 0;
    width      : 100vw;
    height     : 100vh;
    background : linear-gradient(to right, var(--primary), var(--primary-light));
    z-index    : 1100;
    visibility : visible;
    opacity    : 1;
    transition : .3s ease;

    &.unactive {
        visibility : hidden;
        opacity    : 0;
        transition : .3s ease;
    }
`