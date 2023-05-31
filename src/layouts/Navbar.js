import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import Icon from 'icons/Icon';
import { NavbarToggle } from 'components/global';
import useScrollDirection from 'hooks/useScrollDirection';
import useClickOutside from 'hooks/useClickOutside';
import { addActive, addClass } from 'functions/utils';

const Navbar = ({ datas }) => {
    //NextJS router
    const router = useRouter();
    //Control the state of the navbar on mobile and the active submenu
    const [navbar, setNavbar] = React.useState({ open: false, submenu: null });
    //Navbar reference to controle it on click outside
    const navref = React.useRef();
    useClickOutside(navref, () => setNavbar({ open: false, submenu: null }));
    //Get the scroll direction
    const scrollDirection = useScrollDirection('down');
    //Boolean to handle when the navbar is at the top of the page
    const [scrolledToTop, setScrolledToTop] = React.useState(true);
    //Hook to handle scroll event and define if the navbar is at the top of the page or not
    React.useEffect(() => {
        const handleScroll = () => setScrolledToTop(window.pageYOffset < 50)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    //Check if the submenu is active or not
    const isSubmenuActive = (tabs, key) => {
        const tabsUrls = tabs.map(tab => { return tab.url });
        if (tabsUrls.includes(router.pathname) || navbar.submenu === key) {
            return 'active';
        } else return;
    };

    return (
        <div className={`av-navbar ${addActive(navbar.open)} ${addClass(scrollDirection === 'up' && !scrolledToTop, 'scrolled-up')} ${addClass(scrollDirection === 'down' && !scrolledToTop, 'scrolled-down')}`}
            id='navbar'
        >
            <nav ref={navref}>
                <div className="navbar-logo">
                    <Link href="/">
                        <img className="logo" src="/img/logo.png" alt="" />
                    </Link>
                </div>

                <ul className={`nav-container ${addActive(navbar.open)} sub-${addClass(navbar.submenu !== null, 'active')} `}>
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
                                <li className='av-nav-submenu-displayer' key={key}>
                                    <button
                                        className={`navlink ${isSubmenuActive(tab.links, key)}`}
                                        onClick={() => setNavbar(prev => ({ ...prev, submenu: prev.submenu !== key ? key : null }))}
                                    >
                                        {tab.name}<Icon name="CaretDown" />
                                    </button>
                                    <div className={`av-nav-submenu ${addClass(navbar.submenu === key, 'open')}`}>
                                        <div className='menu-small-title'>
                                            <Icon name="ArrowLeft" onClick={() => setNavbar(prev => ({ ...prev, submenu: null }))} /> {tab.name}
                                        </div>
                                        <div className='menu-small-inner'>
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
                                        </div>
                                    </div>
                                </li>
                            )
                        )
                    })}
                </ul>

                {datas.phone &&
                    <div className="av-nav-tools-btn">
                        <a href={'tel:' + datas.phone} small='true'>
                            <Icon name="Phone" />
                        </a>
                    </div>
                }
                {datas.googlemap &&
                    <div className="av-nav-tools-btn">
                        <a href={datas.googlemap} target="_blank" small='true' >
                            <Icon name="Map" />
                        </a>
                    </div>
                }
                {datas.facebook &&
                    <div className="av-nav-tools-btn">
                        <a href={'https://www.facebook.com/' + datas.facebook} target="_blank" small='true' className='last-btn'>
                            <Icon name="Facebook" />
                        </a>
                    </div>
                }
                <NavbarToggle
                    open={navbar.open}
                    onClick={() => setNavbar(prev => ({ ...prev, open: !prev.open }))}
                />
            </nav>
        </div>
    )
}

export default Navbar;