import react, { useEffect, useState } from "react";
import { HiCheck, HiX } from "react-icons/hi";
import { RiSettings3Fill } from "react-icons/ri";
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import { randomID } from "../tools/Utils";

const Cookie = () => {
    const [cookieCard, setCookieCard] = useState(false)
    const [cookieOverlay, setCookieOverlay] = useState(false)
    const [isAccepted, setAccepted] = useState(false)

    const maxAge = 3000 * 24 * 60 * 60 * 1000
    const createToken = (id) => {
        return jwt.sign({ id }, randomID(24), { expiresIn: maxAge })
    }

    useEffect(() => {
        const hasCookie = Cookies.get('jwt_session')
        if (!hasCookie) {
            setCookieCard(true)
        }
    }, [])

    const setCookie = () => {
        const hasCookie = Cookies.get('jwt_session')
        if (!hasCookie) {
            const token = createToken(randomID(24))
            console.log(token)
            Cookies.set('jwt_session', token, { expires: maxAge })
        } else return
    }

    return (
        <>
            {(cookieCard && !cookieOverlay) && (
                <div className="cookies-card">
                    <div className="cookies-card-container">
                        <h3>Ce site utilise des cookies</h3>
                        <p>Notre site utilise des cookies nécessaires à son bon fonctionnement, pour améliorer votre expérience,
                            mesurer les audiences ainsi que vous permettre de partager du contenu sur les réseaux sociaux.<br /><br />
                            Pour plus d'informations, consultez notre <a href="/politique-cookies">notre politique de cookies</a>.</p>
                        <div className="cookies-btn-container">
                            <button className="btn-cookie-two" onClick={() => { setCookieCard(false); setCookieOverlay(true) }}><RiSettings3Fill />Personnaliser</button>
                            <button className="btn-cookie-two" onClick={() => { setCookie(); setCookieCard(false) }}><HiX />Tout refuser</button>
                            <button className="btn-cookie-one" onClick={() => { setCookie(); setAccepted(true); setCookieCard(false) }}><HiCheck />Tout accepter</button>
                        </div>
                        <div className="closer" onClick={() => setCookieCard(false)}><HiX /></div>
                    </div>
                </div>
            )}

            {(cookieOverlay && !cookieCard) && (
                <div className="cookies-overlay">
                    <div className="cookies-overlay-container">
                        <div className="closer" onClick={() => setCookieOverlay(false)}><HiX /></div>
                        <h3>Gérer mes cookies</h3>
                        <p>Nous conservons votre choix pendant 6 mois. Vous pouver changer d'avis à tous moment en cliquant sur
                            l'icône « <strong>gérer mes cookies</strong> » en bas de chaque page de notre site.</p>

                        <div className="cookies-btn-container">
                            <button className="btn-cookie-two"><HiX />Tout refuser</button>
                            <button className="btn-cookie-one"><HiCheck />Tout accepter</button>
                        </div>

                        <div className="cookies-selection">
                            <fieldset>
                                <label className="toggle-btn">
                                    <input className="toggle-checkbox" type="checkbox" checked />
                                    <div className="toggle-switch"></div>
                                </label>
                                <label className="cookie-description">
                                    <h4>Cookies obligatoires</h4>
                                    <p className="name">Ce site utilise des cookies nécessaires à son bon fonctionnement.<br />
                                        Ils ne peuvent pas être désactivés.</p>
                                    <a href="/politique-cookies">En savoir plus</a>
                                </label>
                            </fieldset>

                            <fieldset>
                                <label className="toggle-btn">
                                    <input className="toggle-checkbox" type="checkbox" />
                                    <div className="toggle-switch"></div>
                                </label>
                                <label className="cookie-description">
                                    <h4>Mesure d'audience</h4>
                                    <p className="name">Google Analytics</p>
                                    <a href="/politique-cookies#cookies-tiers">En savoir plus</a> - <a href="https://policies.google.com/privacy" target="_blank">Site officiel</a>
                                    <p>Ils nous permettent de suivre les audiences de notre Site et de connaître votre navigation sur notre Site (cookies Google Analytics).</p>
                                </label>
                            </fieldset>
                            <fieldset>
                                <label className="toggle-btn">
                                    <input className="toggle-checkbox" type="checkbox" />
                                    <div className="toggle-switch"></div>
                                </label>
                                <label className="cookie-description">
                                    <h4>Réseaux sociaux</h4>
                                    <a href="/politique-cookies#cookies-tiers">En savoir plus</a> - <a href="#">Site officiel</a>
                                    <p>En naviguant sur notre Site, vous avez la possibilité de cliquer sur les boutons « réseaux sociaux » afin de consulter
                                        nos profils Facebook, Twitter. Ces applications tierces sont susceptibles de déposer des cookies pour vous proposer
                                        de la publicité ciblée.</p>
                                </label>
                            </fieldset>
                        </div>

                        <div className="cookies-btn-container validate">
                            <a href="/politique-cookies">Politique de cookies</a>
                            <button className="btn-cookie-one" onClick={() => { setCookie(); setAccepted(true); setCookieOverlay(false) }}><HiCheck />Valider</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Cookie