import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "icons/Icon";
import { addActive } from 'functions/utils'

const Footer = ({ datas }) => {
    //NextJS router
    const router = useRouter();

    return (
        <footer className="av-footer" id="footer">
            <div className="container-lg container-top">
                <div className="av-footer-top">
                    <img src="/././img/logo-white.png" alt={datas.denomination} />
                    <div className="av-footer-socials">
                        {datas.facebook &&
                            <a href={'https://www.facebook.com/' + datas.facebook} target="_blank" className="social-btn" rel="noreferrer">
                                <Icon name="FacebookCircle" />
                            </a>
                        }
                    </div>
                </div>
                <div className="av-footer-grid">
                    <div>
                        <h4>Informations</h4>
                        <div className="av-footer-infos">
                            <div className="footer-info">
                                <Icon name="Map" />
                                <a href={datas.googlemap} target="_blank" rel="noreferrer" color="secondary" small='true'>
                                    {datas.adress}
                                </a>
                            </div>
                            <div className="footer-info">
                                <Icon name="Phone" />
                                <a href={"tel:" + datas.phone} color="secondary" small='true'>
                                    {datas.phone}
                                </a>
                            </div>
                        </div>
                        <h4 className="mt-8">Horaires</h4>
                        {datas.opening.map((el, key) => {
                            return (
                                <p className="footer-opening" key={key}>
                                    <span className="font-bold">{el.day ? el.day : ''} : </span>{el.range ? el.range : ''}
                                </p>
                            )
                        })}
                    </div>
                    <div className="av-footer-links">
                        <h4>Plan du site</h4>
                        {datas.navigation.map((tab, key) => {
                            return (
                                !tab.links ? (
                                    <Link href={tab?.link} className={addActive(router.pathname === tab?.link)} target={tab?.target} key={key}>
                                        {tab?.name}
                                    </Link>
                                ) : (
                                    <Link href={tab?.links[0].link} className={addActive(router.pathname === tab?.link)} target={tab?.target} key={key}>
                                        {tab?.name}
                                    </Link>
                                )
                            )
                        })}
                    </div>
                    <div className="av-footer-links">
                        <h4>Services</h4>
                        {datas.navigation[1].links.map((tab, key) => {
                            return <Link href={tab?.link} target={tab?.target} key={key}>{tab?.name}</Link>
                        })}
                    </div>
                    <div className="av-footer-links">
                        <h4>Informations légales</h4>
                        {datas.informations.map((tab, key) => {
                            return <Link href={tab?.link} target={tab?.target} key={key}>{tab?.name}</Link>
                        })}
                        <a href="#cookies-manager" rel='noreferrer'>Gérer mes cookies</a>
                    </div>
                </div>
            </div>
            <div className="container-lg">
                <div className="footer-legals__alcohol-notice">
                    <img alt="Icone république française" src="/img/republique-francaise.png" />
                    <div className="footer-legals__alcohol-content">
                        <div className="footer-legals__alcohol-heading">
                            Interdiction de vente de boissons alcooliques aux mineurs de moins de 18 ans
                        </div>
                        <div className="footer-legals__alcohol-infos">
                            La preuve de majorité de l’acheteur est exigée au moment de la vente en ligne.
                        </div>
                        <div className="footer-legals__alcohol-footer">
                            CODE DE LA SANTÉ PUBLIQUE : ART. L. 3342-1. L. 3342-3
                        </div>
                    </div>
                </div>
            </div>
            <div className="av-footer-bottom">
                <div className="container-lg">
                    <a href="https://www.alexandrevurbier.com/" target="_blank" rel="noreferrer">
                        © 2023 Alexandre Vurbier. Tout droits réservés.
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;