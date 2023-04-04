import React from 'react'
import styled from 'styled-components'
import { Revealer } from 'tools/Revealer'

const Intro = ({ datas, introduction }) => {
    return (
        <Presentation id="presentation">
            <div className="presentation-container">
                <Revealer className="logo">
                    <img
                        src="/././img/logo.png"
                        alt={`${datas.denomination} - ${datas.slogan} à ${datas.city}`}
                        title={`${datas.denomination} - ${datas.slogan} à ${datas.city}`}
                    />
                </Revealer>

                <Revealer delay={300} className="text">
                    <h1>{introduction?.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: introduction?.content}}></div>
                </Revealer>
            </div>
        </Presentation>
    )
}

export default Intro

const Presentation = styled.div`
    width   : 100%;
    padding : 70px 0 100px;

    .presentation-container {
        display         : flex;
        justify-content : center;
        align-items     : center;
        position        : relative;
        max-width       : 1700px;
        height          : auto;
        margin          : 0 auto;
        overflow        : hidden;
          
        .logo {
            position        : relative;
            width           : 20%;
            height          : auto;
            justify-content : center;
            align-items     : center;
            order           : 1;
        
            img {
                height     : auto;
                width      : 70%;
                position   : absolute;
                top        : 50%;
                left       : 50%;
                transform  : translate(-50%, -50%);
                transition : 1s ease-in-out;
            }
        }
        
        .text {
            width       : 55%;
            height      : auto;
            text-align  : justify;
            padding     : 0 40px;
            border-left : 2px solid var(--primary-light);
            order       : 2;

            p {
                color         : var(--text);
                text-align    : justify;
                transition    : 1s ease-in-out;
                margin-bottom : 0;
            }
        
            h1 {
                text-align    : left;
                margin-bottom : 10px;
                margin-top    : 0;
                color         : var(--title);
                font-weight   : 700;
                position      : relative;
            }
        }
    }

    @media(max-width:480px) {
        .presentation-container {
            .text {
                h1 {
                    padding    : 0;
                    text-align : center;
                }
            }
        }
    }

    @media (max-width:767px) {
        .presentation-container {
            flex-direction : column;

            .logo {
                order          : 2;
                width          : 100%;
                padding-bottom : 0;

                img {
                    position  : relative;
                    width     : unset;
                    max-width : 170px;
                    top       : 0;
                    left      : 50%;
                    transform : translateX(-50%);
                }
            }

            .text {
                order         : 1;
                width         : 100% !important;
                border-left   : none;
                margin-bottom : 30px;
                padding       : 0 15px;

                h1 {
                    text-align : center !important;

                    &:after {
                        left      : 50%;
                        transform : translateX(-50%);
                    }
                }
            }
        }
    }

    @media(max-width: 992px) {
        .presentation-container {
            .logo {
                width : 30%;

                img {
                    left : 50%;
                }
            }

            .text {
                width : 70%;
            }
        }
    }
`