import React, { useState } from 'react'
import Navlink from '../tools/Navlink'
import ThemeToggle from '../../theme/ThemeToggle'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    // router.pathname == "/" ? "active" : ""}

    return (
        <header>
            <nav>
                <div className="navbar-logo">
                    <Navlink href="/">
                        <img className="logo" src="./img/logo.png" alt="" />
                    </Navlink>
                </div>

                <ul className={`${open ? "active" : ""}`}>
                    <li>
                        <Navlink href="/">Home</Navlink>
                    </li>
                    <li>
                        <Navlink href="/">About us</Navlink>
                    </li>
                    <li>
                        <Navlink href="/">Services</Navlink>
                    </li>
                    <li>
                        <Navlink href="/">Actualités</Navlink>
                    </li>
                    <li>
                        <Navlink href="/">Services</Navlink>
                    </li>
                    <li>
                        <Navlink href="/">Contact us</Navlink>
                    </li>
                </ul>

                <ThemeToggle />

                <div className="topnav-toggle" onClick={() => setOpen(!open)}>
                    <svg viewBox="0 0 800 600" className={`${open ? "open" : ""}`}>
                        <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top_bar" />
                        <path d="M300,320 L540,320" className="middle_bar" />
                        <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom_bar" transform="translate(480, 320) scale(1, -1) translate(-480, -318)" />
                    </svg>
                </div>
            </nav>
        </header>
    )
}

export default Navbar