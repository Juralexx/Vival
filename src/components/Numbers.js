import React from "react";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { Revealer } from 'tools/Revealer'
import Icon from "./tools/icons/Icon";

const Numbers = ({ datas }) => {
    const pathname = usePathname()

    return (
        <NumbersContainer id="in-numbers" pathname={pathname}>
            <div className="container-lg">
                <h2>En quelques chiffres</h2>
                <div className="__flex">
                    <Revealer className="number">
                        <div className="icon-container">
                            <Icon name="Medal" />
                        </div>
                        <p className="number-title">
                            <span>7</span> ans <br /> d'expérience
                        </p>
                        <p>Votre épicerie <strong>Vival Meillonnas</strong> est ouverte <strong>depuis 2016</strong>.</p>
                    </Revealer>
                    <Revealer delay={300} className="number">
                        <div className="icon-container">
                            <Icon name="ShoppingBasket" />
                        </div>
                        <p className="number-title">
                            <span>1200</span >+ <br /> références
                        </p>
                        <p>Un large choix de produits de qualité, frais et de saison.</p>
                    </Revealer>
                    <Revealer delay={400} className="number">
                        <div className="icon-container">
                            <Icon name="Percent" />
                        </div>
                        <p className="number-title">
                            <span>98</span>% <br /> de client satisfait
                        </p>
                        <p>Basé sur les <a href='https://bit.ly/3Ts2d7L' target='_blank' className="custom-link">avis Google</a>.</p>
                    </Revealer>
                    <Revealer delay={500} className="number">
                        <div className="img-container">
                            <img src='/img/meilleure-chaine-de-magasins-2023.jpg' />
                        </div>
                        <p className="number-title">
                            Meilleure chaine de<br /> magasin de l'année
                        </p>
                        <p>Vival a été élus meilleure chaine de magasins de l'année 2023, catégorie «&nbsp;Commerces&nbsp;de&nbsp;proximité&nbsp;»</p>
                    </Revealer>
                </div>
            </div>
        </NumbersContainer>
    )
}

export default Numbers

const NumbersContainer = styled.div`
    position   : relative;
    padding    : 50px 0;
    background : ${props => props.pathname !== '/' && 'rgba(var(--primary-rgb), 0.02)'};

    &:after {
        position   : absolute;
        content    : "";
        top        : -100px;
        left       : 0;
        right      : 0;
        height     : 100px;
        width      : 100%;
        z-index    : -1;
        background : ${props => props.pathname !== '/' && 'rgba(var(--primary-rgb), 0.02)'};
        clip-path  : polygon(100% 0, 0% 100%, 100% 100%);
    }

    .container-lg {
        padding : 0;
    }

    h2 {
        text-align    : center;
        margin-bottom : 50px;
    }

    .__flex {
        display         : flex;
        justify-content : center;
        flex-wrap       : wrap;

        .number {
            position      : relative;
            padding       : 0 12px;
            text-align    : center;
            margin        : 30px auto;
            min-width     : 25%;
            width         : 100%;
            max-width     : 330px;
            border-radius : var(--rounded-xl);

            .number-title {
                color       : var(--primary);
                font-size   : 22px;
                font-weight : 600;
                white-space : nowrap;
                padding     : 10px 0;
                margin-top  : 20px;
    
                span {
                    font-size   : 45px;
                    line-height : 30px;
                }
            }

            .icon-container {
                position      : relative;
                margin        : 0 auto;
                width         : 110px;
                height        : 110px;
                background    : var(--green);
                border-radius : var(--rounded-full);
            }

            .img-container {
                position : relative;
                margin   : 0 auto;
                width    : 110px;
                height   : 110px;
            }

            svg {
                width         : 100%;
                height        : 100%;
                padding       : 18px;
                color         : var(--secondary);
                border-radius : var(--rounded-full);
            }

            img {
                max-height    : 130px;
                width         : auto;
                border-radius : var(--rounded-md);
            }
        }
    }
`