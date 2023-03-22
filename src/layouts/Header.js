import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'tools/Modal'
import Icon from 'icons/Icon'
import { Revealer } from 'tools/Revealer'
import { LinkButton, ToolsButton } from '../components/tools/Buttons'

const Header = ({ datas }) => {
    const [openHours, setOpenHours] = useState(false)

    return (
        <HeaderContainer id="header">
            <div className="__slider-container">
                <div className="__slider-encart">
                    {/* <Revealer delay={500} origin='left'>
                        <div className="__slider-before">
                            Depuis {datas.creation_date}
                        </div>
                    </Revealer> */}
                    <Revealer delay={0}>
                        <div className="__slogan">
                            {datas.job}<br />à&nbsp;<span>{datas.city}</span>
                        </div>
                    </Revealer>
                    <Revealer delay={100}>
                        <div className='__subslogan'>
                            {datas.slogan}
                        </div>
                    </Revealer>
                    <Revealer delay={200}>
                        <a className="__slider-infos" href={datas.googlemap} target="_blank" rel="noreferrer">
                            <Icon name="Map" /> {datas.adress}
                        </a>
                    </Revealer>
                    <Revealer delay={300}>
                        <a className="__slider-infos" href={"tel:" + datas.phone}>
                            <Icon name="Phone" /> {datas.phone}
                        </a>
                    </Revealer>
                    <Revealer delay={400}>
                        <BtnsContainer>
                            <LinkButton href="https://www.mescoursesdeproximite.com/courses-en-ligne/vival-meillonnas-01370/E0926" color="secondary">
                                Courses en ligne
                            </LinkButton>
                            <ToolsButton href={"mailto:" + datas.mail}>
                                <Icon name="Mail" />
                            </ToolsButton>
                            <ToolsButton onClick={() => setOpenHours(!openHours)}>
                                <Icon name="Clock" />
                            </ToolsButton>
                        </BtnsContainer>
                    </Revealer>
                </div>
            </div>
            <Modal open={openHours} setOpen={setOpenHours}>
                <p className="modal-title">Heures d'ouverture</p>
                {datas.opening.map((el, key) => {
                    return (
                        <p className="text-center" key={key}>
                            <span className="font-semibold">{el.day ? el.day : ''} : </span>{el.range ? el.range : ''}
                        </p>
                    )
                })}
            </Modal>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    width      : 100vw;
    height     : 100vh;
    max-height : 1080px;
    padding    : 50px;
    background : linear-gradient(to top, rgba(var(--primary-xxlight-rgb), 1) 0%, rgba(var(--primary-xxlight-rgb), 0) 100%),
                linear-gradient(to right, rgba(var(--primary-xxlight-rgb), 1) 10%, rgba(var(--primary-xxlight-rgb), 0) 100%), 
                url('/img/slider.jpg');
    background-position : center;
    background-repeat   : no-repeat;
    background-size     : cover;
    
    .__slider-container {
        width     : 100%;
        height    : 100%;
        position  : relative;
        max-width : 1700px;
        margin    : 0 auto;

        .__slider-encart {
            position  : absolute;
            top       : 50%;
            transform : translateY(-50%);
            height    : auto;
            width     : auto;

            .__slider-before {
                position                : relative;
                display                 : inline-block;
                font-size               : clamp(18px, 3vw, 26px);
                line-height             : 1.1;
                font-weight             : 700;
                letter-spacing          : 1px;
                background-image        : linear-gradient(to right, var(--primary-dark), rgba(var(--primary-rgb), 0.8));
                background-clip         : text;
                -webkit-background-clip : text;
                -webkit-text-fill-color : transparent;
                -moz-background-clip    : text;
                -moz-text-fill-color    : transparent;
                padding-left            : 60px;
                margin-bottom           : 10px;

                &:before {
                    content    : "";
                    position   : absolute;
                    display    : block;
                    top        : 50%;
                    left       : 0;
                    transform  : translateY(-50%);
                    height     : 1px;
                    width      : 50px;
                    background : var(--primary);
                }
            }

            .__slogan {
                font-size   : clamp(26px, 7vw, 60px);
                font-weight : 700;
                line-height : 1.1;
                font-weight : 800;
                color       : var(--title);

                span {
                    color : var(--primary);
                }
            }

            .__subslogan {
                position    : relative;
                display     : inline-block;
                margin      : 5px 0 10px;
                font-size   : clamp(20px, 5vw, 32px);
                line-height : 1.1;
                font-weight : 500;
            }

            .__slider-infos {
                padding     : 5px 0;
                display     : inline-flex;
                align-items : center;
                font-size   : 20px;
                line-height : 20px;
                font-weight : 500;
                color       : var(--dark);
        
                &:hover {
                    color : var(--secondary);
                }
        
                svg {
                    margin-right : 5px;
                    height       : 18px;
                    width        : 18px;
                }
            }
        }
    }

    @media(max-width:1024px) {
        .__slider-container {
            background : linear-gradient(to top, rgba(var(--primary-xxlight), 1) 10%, rgba(var(--primary-xxlight), 0) 100%),
                        linear-gradient(to right, rgba(var(--primary-xxlight), 1) 10%, rgba(var(--primary-xxlight), 0) 100%);
        }
    }

    @media(max-width: 768px) {
        .__slider-container {
            .__slider-encart {
                max-width : 100%;
                position  : relative;
            }
        }
    }

    @media(max-width:576px) {
        padding : 20px;
        .__slider-container {
            .__slider-encart {
                .__slider-infos {
                    font-size : 16px;
                }
                .__slogan {
                    font-size   : clamp(26px, 7.4vw, 60px);
                    line-height : 1.25;
                }
            }
        }
    }
`

export const BtnsContainer = styled.div`
    display    : flex;
    max-width  : 320px;
    margin-top : 15px;

    button {
        margin-right : 10px;
    }
`