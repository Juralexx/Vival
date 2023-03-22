import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Icon from "icons/Icon";
import { addActive } from 'functions/utils'

const Footer = ({ datas }) => {
    const router = useRouter()

    return (
        <FooterContainer id="footer">
            <div className="container container-top">
                <div className="footer-top">
                    <img src="/././img/logo-white.png" alt={datas.denomination} />
                    <div className="socials">
                        {datas.facebook &&
                            <a href={'https://www.facebook.com/' + datas.facebook} target="_blank" className="social-btn" rel="noreferrer">
                                <Icon name="FacebookCircle" />
                            </a>
                        }
                    </div>
                </div>
                <div className="__grid">
                    <div>
                        <h4>Informations</h4>
                        <div className="footer-hours">
                            <div className="adress">
                                <Icon name="Map" />
                                <a href={datas.googlemap} target="_blank" color="secondary" small>
                                    {datas.adress}
                                </a>
                            </div>
                            <div className="phone">
                                <Icon name="Phone" />
                                <a href={"tel:" + datas.phone} color="secondary" small>
                                    {datas.phone}
                                </a>
                            </div>
                            <div className="hours">
                                <h5>Horaires</h5>
                                {datas.opening.map((el, key) => {
                                    return (
                                        <p className="opening" key={key}>
                                            <span className="font-bold">{el.day ? el.day : ''} : </span>{el.range ? el.range : ''}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="footer-links">
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
                    <div className="footer-links">
                        <h4>Services</h4>
                        {datas.navigation[1].links.map((tab, key) => {
                            return <Link href={tab?.link} target={tab?.target} key={key}>{tab?.name}</Link>
                        })}
                    </div>
                    <div className="footer-links">
                        <h4>Informations légales</h4>
                        {datas.informations.map((tab, key) => {
                            return <Link href={tab?.link} target={tab?.target} key={key}>{tab?.name}</Link>
                        })}
                        <a href="#cookies-manager" rel='noreferrer'>Gérer mes cookies</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <a href="https://www.alexandrevurbier.com/" target="_blank" rel="noreferrer">
                        © 2023 Alexandre Vurbier. Tout droits réservés.
                    </a>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
    position   : relative;
    width      : 100%;
    color      : #E0E9ED;
    background : var(--primary);
    margin-top : 50px;

    &:before {
        position    : absolute;
        content     : "";
        top         : -99px;
        left        : 0;
        right       : 0;
        background : var(--primary);
        height      : 100px;
        width       : 100%;
        z-index     : -1;
        clip-path   : polygon(0 0, 100% 100%, 0% 100%);
    }

    .container {
        position  : relative;
        width     : 85%;
        max-width : 1700px;

        @media(max-width: 768px) {
            width : 100%;
        }

        &.container-top {
            padding : 30px 20px;
        }
    
        h4 {
            font-weight    : 700;
            letter-spacing : 0;
            font-size      : 20px;
            color          : var(--white);
            margin-bottom  : 10px;
        }

        h5 {
            font-weight   : 600;
            font-size     : 18px;
            margin-top    : 10px;
            margin-bottom : 7px;
            color         : var(--white);
        }

        .footer-logo {
            max-width : 150px;
        }
    }

    .footer-top {
        display         : flex;
        align-items     : flex-end;
        justify-content : space-between;
        padding-bottom  : 30px;
        margin-bottom   : 30px;
        border-bottom   : 1px solid rgba(255, 255, 255, 0.2);

        img {
            max-width    : 100px;
            margin-right : 30px;
        }

        .socials {
            display         : flex;
            justify-content : center;

            .social-btn {
                height        : 32px;
                width         : 32px;
                margin        : 0 10px 0 0;
                border-radius : var(--rounded-lg);
                cursor        : pointer;
            
                svg {
                    height : 32px;
                    width  : 32px;

                    &:hover {
                        opacity : 0.8;
                    }
                }
            }
        }
    }

    .footer-links {
        a {
            display     : block;
            line-height : 28px;

            &:hover {
                color : white;
            }
        }
    }

    .__grid {
        display               : grid;
        grid-template-columns : 1.8fr 1fr 1fr 1fr;

        @media(max-width: 992px) {
            grid-template-columns : 1.5fr 1fr;

            > div {
                padding-bottom : 30px;
            }
        }
        @media(max-width: 576px) {
            grid-template-columns : 1fr;
        }
    }

    .footer-hours {
        position       : relative;
        display        : flex;
        flex-direction : column;
        margin         : 0 auto;

        .adress,
        .phone,
        .hours {
            position : relative;
            padding  : 5px 0;

            svg {
                display      : inline-block;
                height       : 16px;
                width        : 16px;
                margin-top   : -2px;
                margin-right : 5px;
            }
        }

        .opening {
            margin-bottom : 0px;
            display       : flex;
            align-items   : center;
            max-width     : 300px;
            color         : #E0E9ED;

            span {
                font-weight  : 600;
                color        : var(--white);
                margin-right : 10px;
            }
        }
    } 

    .footer-bottom {
        width            : 100%;
        text-align       : right;
        padding          : 20px 0;
        margin-top       : 45px;
        background-color : var(--primary-dark);
    
        a {
            display : inline-block;
            color   : var(--white);

            &:hover {
                border-bottom : 1px solid var(--white);
            }
        }
    }

    @media(max-width: 576px) {
        text-align : center;
        .footer-hours {
            padding-left : 0;
            .adress,
            .phone,
            .hours {
                margin     : 5px auto;
            }
            .opening {
                justify-content : center;
            }
        }
        .footer-logo {
            margin : 0 auto;
        }
    }
`