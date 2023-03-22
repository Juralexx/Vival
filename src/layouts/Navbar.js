import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components';
import Icon from 'icons/Icon';
import NavbarToggle from 'tools/NabvarToggle'
import useScrollDirection from 'hooks/useScrollDirection'
import useClickOutside from 'hooks/useClickOutside'
import useMediaQuery from 'hooks/useMediaQuery'
import { addActive, addClass } from 'functions/utils'
import { LinkToolsButton } from 'components/tools/Buttons';

const Navbar = ({ datas }) => {
    const router = useRouter();
    const [navbar, setNavbar] = React.useState({ open: false, submenu: null })

    const navref = React.useRef()
    useClickOutside(navref, () => setNavbar({ open: false, submenu: null }))

    const md = useMediaQuery('(min-width: 993px)')
    const scrollDirection = useScrollDirection('down');
    const [scrolledToTop, setScrolledToTop] = React.useState(true);

    React.useEffect(() => {
        if (md) {
            const handleScroll = () => setScrolledToTop(window.pageYOffset < 50)
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [md])

    const isSubmenuActive = (tabs, key) => {
        const tabsUrls = tabs.map(tab => { return tab.url })
        if (tabsUrls.includes(router.pathname) || navbar.submenu === key) {
            return 'active'
        } else return
    }

    return (
        <NavbarContainer
            className={addActive(navbar.open)}
            scrollDirection={scrollDirection}
            scrolledToTop={scrolledToTop}
        >
            <nav ref={navref}>
                <div className="navbar-logo">
                    <Link href="/">
                        <img className="logo" src="/./img/logo.png" alt="" />
                    </Link>
                </div>

                <ul className={`nav-container ${addActive(navbar.open)}`}>
                    {datas.navigation.map((tab, key) => {
                        return (
                            !tab.links ? (
                                <li key={key} onClick={() => setNavbar({ open: false, submenu: null })}>
                                    <Link passHref
                                        href={tab.link}
                                        className={`navlink ${addActive(router.pathname === tab.link)}`}
                                        target={tab.target}
                                    >
                                        {tab.name}
                                    </Link>
                                </li>
                            ) : (
                                <li className='menu-small-displayer' key={key}>
                                    <button
                                        className={`navlink ${isSubmenuActive(tab.links, key)}`}
                                        onClick={() => setNavbar(prev => ({ ...prev, submenu: prev.submenu !== key ? key : null }))}
                                    >
                                        {tab.name}<Icon name="CaretDown" />
                                    </button>
                                    <SubMenu className={`submenu ${addClass(navbar.submenu === key, 'open')}`}>
                                        <div className='menu-small-title'>
                                            <Icon name="ArrowLeft" onClick={() => setNavbar(prev => ({ ...prev, submenu: null }))} /> {tab.name}
                                        </div>
                                        {tab.links.map((subtab, i) => {
                                            return (
                                                <Link href={subtab.link}
                                                    passHref
                                                    target={tab.target}
                                                    className={`submenu-link ${addActive(router.pathname === subtab.link)}`}
                                                    onClick={() => setNavbar({ open: false, submenu: null })}
                                                    key={i}
                                                >
                                                    {subtab.name}
                                                </Link>
                                            )
                                        })}
                                    </SubMenu>
                                </li>
                            )
                        )
                    })}
                </ul>

                {datas.phone &&
                    <LinkToolsButton href={'tel:' + datas.phone} small>
                        <Icon name="Phone" />
                    </LinkToolsButton>
                }
                {datas.facebook &&
                    <LinkToolsButton href={'https://www.facebook.com/' + datas.facebook} target="_blank" small>
                        <Icon name="Facebook" />
                    </LinkToolsButton>
                }
                <NavbarToggle
                    open={navbar.open}
                    onClick={() => setNavbar(prev => ({ ...prev, open: !prev.open }))}
                />
            </nav>
        </NavbarContainer>
    )
}

export default Navbar

const NavbarContainer = styled.header`
    width      : 100%;
    height     : 95px;
    position   : fixed;
    transition : 0.5s ease;
    background : linear-gradient(to left, rgba(255, 255, 255, 1) 45%, rgba(255, 255, 255, 0) 75%);
    z-index    : 1000;

    @media(min-width: 993px) and (max-width: 1400px) {
        background : linear-gradient(to left, rgba(255, 255, 255, 1) 65%, rgba(255, 255, 255, 0) 85%);
    }

    @media(min-width: 993px) {
        padding : 20px 50px;

        ${props =>
        props.scrollDirection === 'up' &&
        !props.scrolledToTop &&
        css`
                height     : 55px;
                padding    : 0px 50px;
                background : var(--body);
                box-shadow : var(--shadow-colored);
                opacity    : 1;
                visibility : visible;
        `};
        ${props =>
        props.scrollDirection === 'down' &&
        !props.scrolledToTop &&
        css`
                transform  : translateY(-95px);
                opacity    : 0;
                visibility : hidden;
        `};
    }

    nav { 
        display         : flex;
        justify-content : space-between;
        align-items     : center;
        width           : 100%;
        height          : 100%;
        max-width       : 1700px;
        margin          : 0 auto;
        top             : 0;
        left            : 0;
        transition      : 0.5s ease;
        z-index         : 1000;

        .navbar-logo {
            width   : auto;
            height  : 100%;
            margin  : 0 auto 0 0;
            padding : 7px 5px;
            
            .logo {
                display    : block;
                width      : auto;
                height     : 100%;
                max-height : 45px;
                transition : 0.5s ease-in-out;
                cursor     : pointer;

                &.active {
                    display : none;
                }

                &:hover {
                    transform : scale(1.1);
                }
            }
        }

        .nav-container {
            display    : flex;
            background : rgba(var(--body-rgb), 0);
            z-index    : 100;

            li {
                position : relative;

                .navlink {
                    position    : relative;
                    display     : flex;
                    align-items : center;
                    color       : var(--text);
                    font-weight : 600;
                    height      : 40px;
                    padding     : 0 20px;

                    @media(min-width: 993px) and (max-width: 1400px) {
                        padding : 0 15px;
                    }

                    &:before {
                        position   : absolute;
                        content    : '';
                        bottom     : 5px;
                        left       : 20px;
                        width      : 0;
                        height     : 2px;
                        background : var(--body);
                        transition : .3s ease;
                    }

                    &:hover,
                    &.active {
                        color : var(--primary);

                        &:before {
                            width      : 25px;
                            background : var(--primary);
                            transition : .3s ease;
                        }
                    }

                    svg {
                        width       : 16px;
                        height      : 16px;
                        margin-left : 5px;
                        margin-top  : 1px;
                    }
                }

                &.active {
                    ul {
                        display : block;
                    }
                }
            }
        }
    }

    @media (max-width: 992px) {
        height     : 60px;
        background : var(--body);
        box-shadow : var(--shadow-x-smooth);

        &.active {
            &:before {
                content          : '';
                position         : absolute;
                top              : 60px;
                left             : 0;
                right            : 0;
                width            : 100vw;
                height           : calc(100vh - 60px);
                /* background-color : rgba(0, 0, 0, 0.5); */
                backdrop-filter  : blur(3px);
                transition       : .7s ease;
            }
        }

        nav {
            height   : 60px;
            padding  : 10px 10px;
            position : relative;

            .navbar-logo {
                height  : auto;
                padding : 10px;
                
                .logo {
                    max-height : 30px;
                }
            }

            .nav-container {
                display    : block;
                position   : absolute;
                top        : 60px;
                left       : -100%;
                width      : 55%;
                height     : calc(100vh - 60px);
                padding    : 20px 0;
                text-align : center;
                background : var(--body);
                box-shadow : var(--shadow-left);
                transition : .3s ease;
                overflow   : hidden;

                &.active {
                    left : 0;
                }

                li {
                    position : unset;

                    .navlink {
                        font-size   : 18px;
                        line-height : 18px;
                        font-weight : 600;
                        text-align  : left;
                        width       : 100%;
                        padding     : 0 20px;
                        margin      : 0 !important;
                        border-left : 3px solid transparent;

                        svg {
                            position    : absolute;
                            right       : 10px;
                            width       : 20px;
                            height      : 20px;
                            margin-left : 0;
                        }

                        &:hover,
                        &.active {
                            background-color : rgba(var(--primary-rgb), 0.07);
                            border-left      : 3px solid var(--primary);
                            
                            &:before {
                                content : none;
                            }
                        }
                    }
                }
            }
        }

        .menu-small-displayer {
            position : unset;
        }
    }


    @media(max-width:576px) {
        nav {
            .nav-container {
                width      : 100%;
                box-shadow : none;
            }
        }
    }
`

const SubMenu = styled.div`
    position      : absolute;
    top           : 80px;
    transform     : translateX(-15%);
    width         : 220px;
    transition    : 0.5s ease;
    background    : var(--body);
    box-shadow    : var(--shadow-colored);
    border-radius : var(--rounded-md);
    overflow      : hidden;
    opacity       : 0;
    visibility    : hidden;

    &.open {
        visibility : visible;
        opacity    : 1;
        top        : 45px;
    }

    .menu-small-title {
        display : none;
    }

    a {
        position    : relative;
        display     : flex;
        align-items : center;
        color       : var(--text);
        font-weight : 600;
        padding     : 10px 15px;
        margin      : 0;
        height      : 40px;
        width       : 100%;
        transition  : .3s ease;
        border-left : 3px solid transparent;

        &:hover,
        &.active {
            background-color : rgba(var(--primary-rgb), 0.07);
            border-left      : 3px solid var(--primary);
        }
    }

    @media(max-width: 992px) {
        position   : absolute;
        top        : 0;
        left       : -100%;
        width      : 100%;
        height     : calc(100vh - 50px);
        padding    : 10px 0;
        transform  : none;
        box-shadow : none;
        transition : 0.5s ease;
        opacity    : 0;
        visibility : hidden;
        z-index    : 1;
    
        &.open {
            left       : 0;
            top        : 0;
            opacity    : 1;
            visibility : visible;
        }

        .menu-small-title {
            display         : flex;
            align-items     : center;
            font-size       : 22px;
            font-weight     : 700;
            padding         : 10px;

            svg {
                width            : 32px;
                height           : 32px;
                margin-right     : 10px;
                padding          : 5px;
                background-color : rgba(var(--primary-rgb), 0.07);
                border-radius    : var(--rounded-full);
                cursor           : pointer;

                &:hover {
                    background-color : rgba(var(--primary-rgb), 0.12);
                }
            }
        }

        a {
            font-size   : 18px;
            line-height : 18px;
        }
    }
`