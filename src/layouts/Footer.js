import React from "react";
import { BsTelephoneFill, BsFillClockFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Link from "next/link";
import datas from '../../data/datas.json'
import { useRouter } from "next/router";

const Footer = () => {
    const router = useRouter()
    const addActive = (url) => {
        if (router.pathname === url) return 'active'
        else return
    }

    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="footer-logo">
                            <img src="/././img/logo-white.png" alt={datas.denomination} />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <h5>Informations</h5>
                        <div className="footer-infos">
                            <ul>
                                <li>
                                    <p><a href={datas.googlemap} target="_blank"><FaMapMarkerAlt /> {datas.adress}</a></p>
                                </li>
                                <li>
                                    <p><a href={"tel:" + datas.phone}><BsTelephoneFill /> {datas.phone}</a></p>
                                </li>
                                <li>
                                    <BsFillClockFill />
                                    {datas.opening.map((el, key) => {
                                        return (
                                            <p key={key}>
                                                <span className="font-bold">{el.day ? el.day : ''} : </span>{el.hours ? el.hours : ''}
                                            </p>
                                        )
                                    })}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-2 md:mt-5 lg:mt-0">
                        <h5>Plan du site</h5>
                        <ul>
                            {datas.navbar.map((tab, key) => {
                                return (
                                    !tab.subtabs ? (
                                        <li key={key}>
                                            <Link href={tab.url} className={addActive(tab.url)}>{tab.name}</Link>
                                        </li>
                                    ) : (
                                        <ul key={key}>
                                            {tab.subtabs.map((el, i) => {
                                                return (
                                                    <li key={i}>
                                                        <Link href={el.url}>{el.name}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    )
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 md:mt-5 lg:mt-0">
                        <h5>Légales</h5>
                        <ul>
                            <li><Link href="/mentions-legales">Mentions légales</Link></li>
                            <li><Link href="/politique-cookies">Politique de confidentialité</Link></li>
                            <li><a href="#cookies-manager">Gérer mes cookies</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        <a href="https://www.alexandre-vurbier.com/" target="_blank">Copyright © 2022 Alexandre Vurbier. Tout droits réservés.</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer