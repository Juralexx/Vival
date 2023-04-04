import React from "react";
import styled from "styled-components";
import Icon from "./icons/Icon";
import useScrollDirection from './hooks/useScrollDirection'
import { addClass } from "../../../functions/utils";

const ScrolltoTop = () => {
    const scrollDirection = useScrollDirection('down');
    const [scrolled, setScrolled] = React.useState(false);
    const [active, setActive] = React.useState(false)

    const handleScroll = () => {
        if (window.pageYOffset > 1000)
            setScrolled(true);
        else setScrolled(false)
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    React.useEffect(() => {
        if (scrolled && scrollDirection === 'up')
            setActive(true)
        else if (scrolled && scrollDirection === 'down')
            setActive(false)
        else
            setActive(false)
    }, [scrolled, scrollDirection])

    const backtoTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <ScrollToTop className={addClass(active, 'active')} onClick={backtoTop}>
            <Icon name="ArrowUp" />
        </ScrollToTop>
    )
}

export default ScrolltoTop

const ScrollToTop = styled.div`
    visibility : hidden;
    opacity    : 0;
    transform  : scale(0);
    transition : .3s;
    cursor     : pointer;
    width      : 0;
    height     : 0;

    &.active {
        height     : 40px;
        width      : 40px;
        visibility : visible;
        opacity    : 1;
        transform  : scale(1);
        transition : .3s;
        margin-top : 10px;

        svg {
            width         : 40px;
            height        : 40px;
            padding       : 7px;
            color         : white;
            background    : var(--primary);
            border-radius : var(--rounded-full);
            box-shadow    : var(--shadow-tiny);
            opacity       : 1;
            visibility    : visible;
            transition    : .3s;
        }
    }

    svg {
        opacity    : 0;
        visibility : hidden;
        transition : .1s;
    }
`