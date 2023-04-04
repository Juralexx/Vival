import React from "react";
import styled from "styled-components";
import { Revealer } from 'tools/Revealer'
import Icon from "icons/Icon";
import FacebookCard from "./FacebookCard";
import Payments from "./tools/Payments";

const Informations = ({ datas }) => {
    return (
        <InformationsContainer id="contact-bar">
            <h2>Informations</h2>
            <div className="__grid container-lg">
                <Revealer>
                    <div className="infos adress">
                        <h4>Adresse</h4>
                        <a href={datas.googlemap} target="_blank" rel="noreferrer">
                            {datas.street}<br />{datas.postcode} {datas.city}
                        </a>
                    </div>
                    <div className="infos phone">
                        <h4>Contact</h4>
                        <a href={"tel:" + datas.phone}>
                            {datas.phone}
                        </a>
                    </div>
                    <div className="mt-7">
                        <FacebookCard datas={datas} />
                    </div>
                </Revealer>
                <Revealer delay={300}>
                    <div className="infos hours">
                        <h4>Horaires</h4>
                        <div>
                            {datas.opening.map((el, key) => {
                                return (
                                    <p className="opening" key={key}>
                                        <span>{el.day ? el.day : ''}</span><span className="divider"></span>{el.range ? el.range : ''}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </Revealer>
                <Revealer delay={400} className="socials-bar">
                    <Payments />
                </Revealer>
            </div>
        </InformationsContainer>
    )
}

export default Informations

const InformationsContainer = styled.div`
    position   : relative;
    width      : 100%;
    padding    : 50px 0;
    clear      : both;
    background : rgba(var(--primary-rgb), 0.05);

    &:after {
        position   : absolute;
        content    : "";
        bottom     : -100px;
        left       : 0;
        right      : 0;
        height     : 100px;
        width      : 100%;
        z-index    : -1;
        background : rgba(var(--primary-rgb), 0.05);
        clip-path  : polygon(0 0, 0% 100%, 100% 0);
    }

    h2 {
        margin-bottom : 40px;
        text-align    : center;
    }

    h4 {
        font-weight   : 600;
        margin-top    : 6px;
        margin-bottom : 7px;
        text-align    : center;
    }

    .icon {
        width         : 50px;
        height        : 50px;
        padding       : 10px;
        color         : var(--primary);
        background    : rgba(var(--primary-rgb), 0.25);
        border-radius : var(--rounded-lg);
        margin        : 0 auto;
        
        svg {
            width  : 100%;
            height : 100%;
        }
    }

    .__grid {
        display               : grid;
        grid-template-columns : 1fr 1fr 1fr;
        grid-gap              : 20px;
        max-width             : 1400px;
        margin                : 0 auto;

        @media(max-width: 1100px) {
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

        .infos {
            position       : relative;
            text-align     : left;
            display        : flex;
            flex-direction : column;
            align-items    : center;

            @media(max-width: 768px) {
                margin-bottom : 30px;
            }

            &.phone {
                margin-top : 40px;
            }

            div,
            a {
                position   : relative;
                display    : inline-block;
                text-align : left;
                text-align : center;
                font-size  : 18px;
            }

            a {
                &:hover {
                    color : var(--secondary)
                }
            }

            p {
                text-align : left;
                width      : 100%;
            }
        }
    }
`