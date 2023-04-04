import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Modal from 'tools/Modal'
import Icon from 'icons/Icon'
import Opening from 'components/Opening'
import { Revealer } from 'tools/Revealer'
import { LinkButton, LinkToolsButton, ToolsButton } from '../components/tools/Buttons'
import useMediaQuery from 'components/tools/hooks/useMediaQuery'

const Header = ({ datas }) => {
    const [openHours, setOpenHours] = React.useState(false)
    const sm = useMediaQuery('(max-width: 768px)')

    return (
        <HeaderContainer id="header">
            <div className="__slider-container">
                <div className="__slider-encart">
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
                        <div className='__slider-infos-container'>
                            <a className="__slider-infos address" href={datas.googlemap} target="_blank" rel="noreferrer">
                                {datas.adress}
                            </a>
                            <a className="__slider-infos phone" href={"tel:" + datas.phone}>
                                {datas.phone}
                            </a>
                        </div>
                    </Revealer>
                    <Revealer delay={400}>
                        <BtnsContainer>
                            <LinkButton href='#form'>
                                Nous contacter
                            </LinkButton>
                            <ToolsButton onClick={() => setOpenHours(!openHours)}>
                                <Icon name="Clock" />
                            </ToolsButton>
                            <LinkToolsButton href={datas.googlemap} target="_blank">
                                <Icon name="Map" />
                            </LinkToolsButton>
                        </BtnsContainer>
                    </Revealer>
                    <Revealer delay={500}>
                        <Opening datas={datas} />
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
            <div className='main-image-container'>
                <Image
                    className='main-image'
                    src={!sm ? '/img/vival-meillonnas.jpg' : '/img/vival-meillonnas-mob.jpg'}
                    alt='Vival Meillonnas'
                    width={500}
                    height={370}
                    priority={true}
                />
            </div>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    position            : relative;
    width               : 100vw;
    height              : 100vh;
    max-height          : 1080px;
    padding             : 50px;
    background          : url('/img/slider.jpg');
    background-position : center;
    background-repeat   : no-repeat;
    background-size     : cover;

    @media(max-width: 768px) {
        background : url('/img/slider-tab.jpg');
    }
    
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
            z-index   : 1;

            .__slogan {
                font-size   : clamp(26px, 7vw, 70px);
                font-weight : 700;
                line-height : 1.1;
                color       : var(--green-title);

                span {
                    color : var(--primary);
                }
            }

            .__subslogan {
                position    : relative;
                display     : inline-block;
                margin      : 5px 0 10px;
                font-size   : clamp(20px, 6vw, 32px);
                line-height : 1.1;
                font-weight : 500;
                color       : var(--title);
                font-family : var(--font-fam2);
            }

            .__slider-infos-container {
                display : inline-flex;
                padding : 5px 0;
            }

            .__slider-infos {
                display     : inline-flex;
                align-items : center;
                font-size   : 20px;
                line-height : 24px;
                font-weight : 500;
                color       : var(--title);

                &.address {
                    padding-right : 10px;
                    border-right : 1px solid var(--title);
                }
                &.phone {
                    padding-left : 10px;
                }
        
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

    .main-image-container {
        display                : inline-block;
        position               : absolute;
        right                  : 0;
        bottom                 : 0;
        width                  : 50%;
        height                 : auto;
        border-top-left-radius : 100%;
        padding                : 7px 0 0 7px;
        overflow               : hidden;
        border-top             : 3px dashed var(--primary);
        border-left            : 3px dashed var(--primary);
    }

    .main-image {
        display                : block;
        width                  : 100%;
        height                 : auto;
        border-top-left-radius : 100%;
        z-index                : 0;
    }

    @media(min-width: 1400px) {
        .main-image-container {
            width : 55%;
        }
    }

    @media(max-width: 1200px) {
        .__slider-container {
            .__slider-encart {
                top : 40%;
            }
        }
        .main-image-container {
            width : 60%;
        }
    }

    @media(max-width: 768px) {
        .__slider-container {
            .__slider-encart {
                max-width : 100%;
                position  : relative;
            }
        }
        .main-image-container {
            width : 90%;
        }
    }

    @media(max-width:576px) {
        height  : 700px;
        padding : 15px;
        .__slider-container {
            .__slider-encart {
                .__slider-infos-container {
                    flex-direction : column;
                }
                .__slider-infos {
                    font-size : 18px;
                    &.address {
                        padding-right  : 0;
                        padding-bottom : 5px;
                        border-right   : 0;
                    }
                    &.phone {
                        padding-left : 0;
                    }
                }
                .__slogan {
                    font-size   : clamp(26px, 7.4vw, 60px);
                    line-height : 1.25;
                }
                .__subslogan {
                    margin : 5px 0;
                }
            }
        }
        .main-image-container {
            width : 94%;
        }
    }

    @media(max-width: 440px) {
        height : 600px;
        .main-image-container {
            width : 100%;
        }
    }
`

export const BtnsContainer = styled.div`
    display     : flex;
    align-items : center;
    max-width   : 360px;
    margin-top  : 15px;

    button {
        margin-right : 10px;
    }

    @media(max-width:576px) {
        max-width : 100%;
        button a {
            font-size : 16px;
        }
    }
`