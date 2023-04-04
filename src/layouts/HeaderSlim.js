import React from "react";
import styled from "styled-components";
import { BtnsContainer } from "./Header";
import { LinkButton, LinkToolsButton, ToolsButton } from "components/tools/Buttons";
import Icon from "components/tools/icons/Icon";
import Modal from "components/tools/Modal";

const HeaderSlim = ({ image, datas }) => {
    const [openHours, setOpenHours] = React.useState(false)
    ///'url(/img/slider-not-main.jpg)'
    return (
        <HeaderSlimContainer
            id="header"
            isImage={image ? true : false}
            style={{ backgroundImage: image ? `url(${image})` : 'none' }}
        >
            <div className="__slider-slim-container">
                <div className="__slider-slim-encart">
                    <div className="__slogan">
                        {datas.job}<br />à&nbsp;<span>{datas.city}</span>
                    </div>
                    <div className='__slider-infos-container'>
                        <a className="__slider-infos address" href={datas.googlemap} target="_blank" rel="noreferrer">
                            {datas.adress}
                        </a>
                        <a className="__slider-infos phone" href={"tel:" + datas.phone}>
                            {datas.phone}
                        </a>
                    </div>
                    <BtnsContainer>
                        <LinkButton href='/contact'>
                            Nous contacter
                        </LinkButton>
                        <ToolsButton onClick={() => setOpenHours(!openHours)}>
                            <Icon name="Clock" />
                        </ToolsButton>
                        <LinkToolsButton href={datas.googlemap} target="_blank">
                            <Icon name="Map" />
                        </LinkToolsButton>
                    </BtnsContainer>
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
        </HeaderSlimContainer>
    )
}

export default HeaderSlim

const HeaderSlimContainer = styled.div`
    position            : relative;
    width               : 100vw;
    height              : 400px;
    padding             : 145px 50px 50px;
    background-position : center;
    background-repeat   : no-repeat;
    background-size     : cover;
    background-color    : var(--green);

    &:before {
        content    : '';
        position   : absolute;
        top        : 0;
        left       : 0;
        width      : 100%;
        height     : 100%;
        background : ${props => props.isImage && 'linear-gradient(to top, rgba(var(--body-rgb), 1) 0%, rgba(var(--body-rgb), 0) 70%), linear-gradient(to right, rgba(var(--body-rgb), 1) 25%, rgba(var(--body-rgb), 0) 70%)'};
    
        @media(max-width: 992px) {
            background : ${props => props.isImage && 'linear-gradient(to top, rgba(var(--body-rgb), 1) 0%, rgba(var(--body-rgb), 0) 100%), linear-gradient(to right, rgba(var(--body-rgb), 1) 25%, rgba(var(--body-rgb), 0) 100%)'};
        }
    }

    .__slider-slim-container {
        position  : relative;
        width     : 100%;
        max-width : 1700px;
        height    : 100%;
        margin    : 0 auto;

        .__slider-slim-encart {
            position  : absolute;
            top       : 50%;
            transform : translateY(-50%);
            height    : auto;
            width     : auto;

            .__slogan {
                font-size     : clamp(26px, 7vw, 50px);
                font-weight   : 700;
                line-height   : 1.1;
                color         : ${props => !props.isImage ? 'var(--text)' : 'var(--text)'};
                margin-bottom : 5px;

                span {
                    color : ${props => !props.isImage ? 'var(--primary)' : 'var(--primary)'};
                }
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
                color       : ${props => !props.isImage ? 'var(--text)' : 'var(--text)'};

                &.address {
                    padding-right : 10px;
                    border-right  : 1px solid var(--text);
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

    @media(max-width: 768px) {
        padding : 50px 0;
        .__slider-slim-container {
            .__slider-slim-encart {
                width     : 100%;
                transform : translateY(-40%);
                padding   : 50px 15px;
                .__slogan {
                    line-height : 1.25;
                }
                .__slider-infos {
                    font-size : 16px;
                }
            }
        }
    }
    @media(max-width:576px) {
        .__slider-slim-container {
            .__slider-slim-encart {
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
                    font-size : clamp(26px, 7.8vw, 64px);
                }
            }
        }
    }
`