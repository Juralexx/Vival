import React, { useState } from "react";
import styled from "styled-components";
import Modal from 'tools/Modal'
import Icon from "icons/Icon";
import { BtnsContainer } from "./Header";
import { LinkButton, ToolsButton, LinkToolsButton } from "components/tools/Buttons";

const HeaderSlim = ({ image, datas }) => {
    const [openHours, setOpenHours] = useState(false)

    return (
        <HeaderSlimContainer id="header" style={{ backgroundImage: image ? `url(${image})` : 'url(/././img/slider-not-main.jpg)' }}>
            <div className="__slider-slim-container">
                <div className="__slider-slim-encart">
                    <div className="__slogan">
                        {datas.job}<br />à&nbsp;<span>{datas.city}</span>
                    </div>
                    <a className="__slider-infos" href={datas.googlemap} target="_blank" rel="noreferrer">
                        <Icon name="Map" /> {datas.adress}
                    </a>
                    <a className="__slider-infos" href={"tel:" + datas.phone} rel="noreferrer">
                        <Icon name="Phone" /> {datas.phone}
                    </a>
                    <BtnsContainer>
                        <LinkButton href="https://www.mescoursesdeproximite.com/courses-en-ligne/vival-meillonnas-01370/E0926" color="secondary">
                            Courses en ligne
                        </LinkButton>
                        <LinkToolsButton href={"mailto:" + datas.mail}>
                            <Icon name="Mail" />
                        </LinkToolsButton>
                        <ToolsButton onClick={() => setOpenHours(!openHours)}>
                            <Icon name="Clock" />
                        </ToolsButton>
                    </BtnsContainer>
                </div>
            </div>
            <Modal open={openHours} setOpen={setOpenHours}>
                <p className="modal-title">Heures d'ouverture</p>
                {datas.opening.map((el, key) => {
                    return (
                        <p className="text-center" key={key}>
                            <span className="font-bold">{el.day ? el.day : ''} : </span>{el.hours ? el.hours : ''}
                        </p>
                    )
                })}
            </Modal>
        </HeaderSlimContainer>
    )
}

export default HeaderSlim

const HeaderSlimContainer = styled.div`
    position : relative;
    width    : 100vw;
    height   : 400px;
    padding  : 50px;
    //background-image    : url('../../public/img/slider-not-main.jpg');
    background-position : center;
    background-repeat   : no-repeat;
    background-size     : cover;

    &:before {
        content  : '';
        position : absolute;
        top      : 0;
        left     : 0;
        width    : 100%;
        height   : 100%;
        background :
        linear-gradient(to top, rgba(var(--body-rgb), 1) 0%, rgba(var(--body-rgb), 0) 60%),
        linear-gradient(to right, rgba(var(--body-rgb), 1) 10%, rgba(var(--body-rgb), 0) 70%);
    }

    .__slider-slim-container {
        width     : 100%;
        height    : 100%;
        position  : relative;
        max-width : 1700px;
        margin    : 0 auto;

        .__slider-slim-encart {
            position  : absolute;
            top       : 50%;
            transform : translateY(-30%);
            height    : auto;
            width     : auto;

            .__slogan {
                font-size     : clamp(28px, 6.8vw, 42px);
                font-weight   : 700;
                line-height   : 1.1;
                color         : var(--title);
                margin-bottom : 5px;

                span {
                    color : var(--primary);
                }
            }

            .__slider-infos {
                padding     : 5px 0;
                display     : flex;
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

    @media(max-width: 992px) {
        &:before {
            background :
                linear-gradient(to top, rgba(var(--body-rgb), 1) 0%, rgba(var(--body-rgb), 0) 100%),
                linear-gradient(to right, rgba(var(--body-rgb), 1) 25%, rgba(var(--body-rgb), 0) 100%),
                url('/img/slider-not-main.jpg');
        }
    }

    @media(max-width: 768px) {
        padding : 50px 15px;
        .__slider-slim-container {
            .__slider-slim-encart {
                transform : translateY(-40%);
                .__slogan {
                    font-size   : clamp(26px, 7.4vw, 60px);
                    line-height : 1.25;
                }
                .__slider-infos {
                    font-size : 16px;
                }
            }
        }
    }
`