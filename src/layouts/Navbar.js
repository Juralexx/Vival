import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router'
import useScrollDirection from '../hooks/useScrollDirection'
import useClickOutside from '../hooks/useClickOutside'
import useMediaQuery from '../hooks/useMediaQuery'
import { addClass } from '../tools/Utils'
import datas from '../../data/datas.json'
import { FaFacebookF, FaCaretDown } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'

const Navbar = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false)
    const [submenu, setSubmenu] = useState(null)
    const navref = useRef()
    useClickOutside(navref, () => {
        setOpen(false)
        setSubmenu(false)
    })

    const md = useMediaQuery('(min-width: 993px)')
    const scrollDirection = useScrollDirection('down');
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const [navClass, setNavClass] = useState('')

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    };

    useEffect(() => {
        if (md) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [md])

    useEffect(() => {
        if (md) {
            if (!scrolledToTop && scrollDirection === 'up')
                setNavClass('reduced-navbar')
            else if (!scrolledToTop && scrollDirection === 'down')
                setNavClass('hidden-navbar')
            else setNavClass('')

            if (navClass === 'hidden-navbar' && submenu !== null) setSubmenu(null)
        }
    }, [md, scrolledToTop, scrollDirection, navClass, submenu])

    const addActive = (url) => {
        if (router.pathname === url) return 'active'
        else return
    }
    const isSubmenuActive = (submenu) => {
        const tabsUrls = []
        submenu.map(tab => {
            return tabsUrls.push(tab.url)
        })
        if (tabsUrls.includes(router.pathname)) return 'active'
        else return
    }

    return (
        <header className={`${navClass} ${open ? "active" : ""}`}>
            <nav ref={navref}>
                <div className="navbar-logo">
                    <Link href="/">
                        <img className="logo" src="/./img/logo.png" alt="" />
                    </Link>
                </div>

                <ul className={`${open ? "active" : ""}`}>
                    {datas.navbar.map((tab, key) => {
                        return (
                            !tab.subtabs ? (
                                <li onClick={() => { setOpen(false), setSubmenu(null) }} key={key}>
                                    <Link href={tab.url} className={addActive(tab.url)} target={tab.url.includes('https://') ? '_blank' : '_self'}>
                                        {tab.name}
                                    </Link>
                                </li>
                            ) : (
                                <li className='menu-small-displayer' key={key}>
                                    <button className={isSubmenuActive(tab.subtabs)} onClick={() => setSubmenu(submenu !== key ? key : null)}>{tab.name}<FaCaretDown /></button>
                                    <div className={`${addClass(submenu === key, 'open')} menu-small`}>
                                        <div className='menu-small-title'><HiOutlineArrowSmLeft onClick={() => setSubmenu(null)} />{tab.name}</div>
                                        {tab.subtabs.map((subtab, i) => {
                                            return (
                                                <Link href={subtab.url} className={addActive(subtab.url)} onClick={() => setOpen(false)} key={i}>
                                                    {subtab.name}
                                                </Link>
                                            )
                                        })}

                                    </div>
                                </li>
                            )
                        )
                    })}
                </ul>

                <a href={'tel:' + datas.phone} className="navbar-btn">
                    <BsTelephoneFill />
                </a>
                <a href={'https://www.facebook.com/' + datas.facebook} target="_blank" className="navbar-btn">
                    <FaFacebookF />
                </a>

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