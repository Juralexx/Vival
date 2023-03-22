import React from "react";
import styled from "styled-components";
import { Revealer } from 'tools/Revealer'
import Icon from "icons/Icon";
import FacebookCard from "./FacebookCard";

const ContactBar = ({ datas }) => {
    return (
        <ContactBarContainer id="contact-bar">
            <h2>Nous contacter</h2>
            <div className="__grid container-lg">
                <Revealer>
                    <div className="infos adress">
                        <h3>Adresse</h3>
                        <a href={datas.googlemap} target="_blank" rel="noreferrer">
                            <Icon name="Map" /> {datas.street}<br />{datas.postcode} {datas.city}
                        </a>
                    </div>
                    <div className="infos phone">
                        <h3>Contact</h3>
                        <a href={"tel:" + datas.phone}>
                            <Icon name="Phone" /> {datas.phone}
                        </a>
                    </div>
                </Revealer>
                <Revealer delay={300}>
                    <h3>Horaires</h3>
                    <div>
                        {datas.opening.map((el, key) => {
                            return (
                                <p className="opening" key={key}>
                                    <span>{el.day ? el.day : ''}</span><div className="divider"></div>{el.range ? el.range : ''}
                                </p>
                            )
                        })}
                    </div>
                </Revealer>
                <Revealer delay={400} className="socials-bar">
                    <FacebookCard datas={datas} />
                </Revealer>
            </div>
        </ContactBarContainer>
    )
}

export default ContactBar

const ContactBarContainer = styled.div`
    position   : relative;
    width      : 100%;
    padding    : 50px 0;
    clear      : both;
    background : rgba(var(--primary-rgb), 0.07);

    &:after {
        position   : absolute;
        content    : "";
        bottom     : -100px;
        left       : 0;
        right      : 0;
        height     : 100px;
        width      : 100%;
        z-index    : -1;
        background : rgba(var(--primary-rgb), 0.07);
        clip-path  : polygon(0 0, 0% 100%, 100% 0);
    }

    h2 {
        margin-bottom : 40px;
        text-align    : center;
    }

    .__grid {
        display               : grid;
        grid-template-columns : 1fr 1fr 1fr;
        grid-gap              : 20px;
        max-width             : 1400px;
        margin                : 0 auto;

        @media(max-width: 992px) {
            grid-template-columns : 1fr;

            .socials-bar {
                margin-top : 20px;
            }
        }

        .socials-bar {
            display        : flex;
            flex-direction : column;
            align-items    : center;
        }

        > div:not(.socials-bar) {
            position       : relative;
            text-align     : left;
            display        : flex;
            flex-direction : column;
            align-items    : center;

            @media(max-width: 768px) {
                margin-bottom : 30px;
            }

            h3 {
                font-weight   : 600;
                margin-bottom : 15px;
            }

            svg {
                position   : absolute;
                width      : 18px;
                height     : 18px;
                color      : var(--text);
                margin-top : -2px;
            }

            .phone {
                margin-top : 30px;
                svg {
                    left : -23px;
                    top  : 6px;
                }
            }
            .adress {
                svg {
                    left : -18px;
                    top  : 6px;
                }
            }

            div,
            a {
                position   : relative;
                display    : inline-block;
                text-align : left;
                text-align : center;
                font-size  : 20px;
            }

            p {
                text-align : left;
                width      : 100%;
            }

            .opening {
                margin-bottom   : 6px;
                display         : flex;
                align-items     : center;
                justify-content : space-between;

                .divider {
                    flex-grow     : 1;
                    border-bottom : 1px solid var(--light-border);
                    margin        : 10px;
                    min-width     : 5px;
                }

                span {
                    font-weight : 600;
                    color       : var(--dark);
                    text-transform: uppercase;
                }
            }
        }
    }
`