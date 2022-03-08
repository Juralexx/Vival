import React from 'react'
import ThemeToggle from '../../theme/ThemeToggle'

const Navbar = () => {

    return (
        <header>
            <nav>
                <div className="navbar-logo">
                    <a href="#">
                        <img className="logo logo-white" src="./img/logo-white.png" alt="" />
                        <img className="logo" src="./img/logo.png" alt="" />
                    </a>
                </div>

                <ul>
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="javascript:void(0)" className="sub-menu">Services</a>
                        <ul>
                            <li><a href="#">link1</a></li>
                            <li><a href="#">link2</a></li>
                            <li><a href="#">link3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Actualités</a></li>
                    <li><a href="javascript:void(0)" className="sub-menu">Services</a>
                        <ul>
                            <li><a href="#">link1</a></li>
                            <li><a href="#">link2</a></li>
                            <li><a href="#">link3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Contact us</a></li>
                </ul>

                <ThemeToggle />
                <button className="modal-btn modal-phone-btn"><i className="fas fa-phone-alt"></i></button>
                <button className="modal-btn modal-mail-btn"><i className="fas fa-envelope"></i></button>
                <button className="modal-btn modal-map-btn"><i className="fas fa-map-marker-alt"></i></button>
                <button className="modal-btn modal-hour-btn"><i className="fas fa-clock"></i></button>
                <button className="modal-btn"><i className="fa fa-facebook"></i></button>

                <div className="topnav-toggle">
                    <svg viewBox="0 0 800 600" className="">
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