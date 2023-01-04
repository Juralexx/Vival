import React, { useEffect, useState } from "react";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import useScrollDirection from '../hooks/useScrollDirection'
import { addClass } from "./Utils";

const ScrolltoTop = () => {
    const scrollDirection = useScrollDirection('down');
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState(false)

    const handleScroll = () => {
        if (window.pageYOffset > 1000) {
            setScrolled(true);
        } else {
            setScrolled(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        if (scrolled && scrollDirection === 'up') {
            setActive(true)
        } else if (scrolled && scrollDirection === 'down') {
            setActive(false)
        } else {
            setActive(false)
        }
    }, [scrolled, scrollDirection])

    const backtoTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className={`scrolltotop ${addClass(active, 'active')}`} onClick={backtoTop}>
            <HiOutlineArrowSmUp />
        </div>
    )
}

export default ScrolltoTop