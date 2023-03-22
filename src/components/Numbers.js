import React from "react";
import styled from "styled-components";
import { Revealer } from 'tools/Revealer'
import Icon from "./tools/icons/Icon";

const Numbers = () => {
    return (
        <NumbersContainer className="container" id="in-numbers">
            <h2>En quelques chiffres</h2>
            <div className="in-numbers-container">
                <Revealer className="number">
                    <div className="icon-container">
                        <Icon name="Medal" />
                    </div>
                    <p className="number-title">
                        <span>6</span> ans <br /> d'expérience
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                </Revealer>

                <Revealer delay={300} className="number">
                    <div className="icon-container">
                        <Icon name="ShoppingBasket" />
                    </div>
                    <p className="number-title">
                        <span>1200</span >+ <br /> références
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                </Revealer>

                <Revealer delay={400} className="number">
                    <div className="icon-container">
                        <Icon name="Percent" />
                    </div>
                    <p className="number-title">
                        <span>100</span>% <br /> de client satisfait
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                </Revealer>
            </div>
        </NumbersContainer>
    )
}

export default Numbers

const NumbersContainer = styled.div`
    padding : 50px 0;

    h2 {
        text-align    : center;
        margin-bottom : 50px;
    }

    .in-numbers-container {
        display         : flex;
        justify-content : center;
        flex-wrap       : wrap;

        .number {
            position      : relative;
            padding       : 43px 15px 20px;
            text-align    : center;
            margin        : 30px auto;
            max-width     : 300px;
            border        : 1px solid var(--light-border);
            box-shadow    : var(--shadow-colored);
            border-radius : var(--rounded-3xl);

            .number-title {
                color       : var(--primary);
                font-size   : 22px;
                font-weight : 600;
                white-space : nowrap;
                padding     : 10px 0;
                margin-top  : 7px;
    
                span {
                    font-size   : 45px;
                    line-height : 30px;
                }
            }

            .icon-container {
                position      : absolute;
                top           : -42.5px;
                left          : 50%;
                transform     : translateX(-50%);
                margin        : 0 auto;
                width         : 85px;
                height        : 85px;
                background    : var(--body);
                border-radius : var(--rounded-full);
                border        : 1px solid var(--light-border);
                box-shadow    : var(--shadow-tiny);
            }
    
            svg {
                width         : 100%;
                height        : 100%;
                padding       : 15px;
                color         : var(--secondary);
                border-radius : var(--rounded-full);
            }
        }
    }
`