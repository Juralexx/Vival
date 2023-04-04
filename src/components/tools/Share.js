import React from "react";
import styled from "styled-components";
import { FacebookShareButton, LinkedinShareButton, PinterestShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import Icon from "./icons/Icon";
import { addClass } from "../../../functions/utils";
import useClickOutside from 'hooks/useClickOutside'

const Share = () => {
    const url = typeof window !== undefined ? window.location.href : ''

    const [active, setActive] = React.useState(false)
    const shareRef = React.useRef()
    useClickOutside(shareRef, () => setActive(false))

    const socialsArr = [{
        button: FacebookShareButton,
        name: 'Facebook',
        picto: <Icon name="Facebook" />
    }, {
        button: LinkedinShareButton,
        name: 'Linkedin',
        picto: <Icon name="Linkedin" />
    }, {
        button: PinterestShareButton,
        name: 'Pinterest',
        picto: <Icon name="Pinterest" />
    }, {
        button: TwitterShareButton,
        name: 'Twitter',
        picto: <Icon name="Twitter" />
    }, {
        button: WhatsappShareButton,
        name: 'Whatsapp',
        picto: <Icon name="WhatsappOutline" />
    }]

    return (
        <React.Fragment>
            <ShareHandler className={`share-handler ${addClass(active, 'masked')}`} onClick={() => setActive(true)}>
                <Icon name="Share" />
            </ShareHandler>
            <ShareButtons className={`share-buttons ${addClass(active, 'active')}`} ref={shareRef}>
                <div className="title">Partager cette page</div>
                <div className="share-container">
                    {socialsArr.map((network, key) => {
                        return (
                            <network.button resetButtonStyle={false} url={url} key={key}>
                                {network.picto}
                            </network.button>
                        )
                    })}
                    <div className="closer" onClick={() => setActive(false)}>
                        <Icon name="Cross" />
                    </div>
                </div>
            </ShareButtons>
        </React.Fragment>
    )
}

export default Share

const ShareButtons = styled.div`
    height           : 40px;
    width            : 40px;
    display          : flex;
    align-items      : center;
    justify-content  : center;
    border-radius    : var(--rounded-full);
    transition       : .3s ease;
    transition-delay : .3s;

    .share-container {
        display          : flex;
        flex-direction   : column;
        align-items      : center;
        justify-content  : center;
        border-radius    : var(--rounded-full);
        max-height       : 0;
        width            : 0;
        visibility       : hidden;
        overflow         : hidden;
        transition       : .3s ease;
        transition-delay : .3s;

        button {
            position         : relative;
            display          : flex;
            align-items      : center;
            justify-content  : center;
            height           : 0;
            width            : 0;
            font-size        : 20px;
            color            : var(--primary);
            background-color : white;
            border-radius    : var(--rounded-full);
            margin           : 5px 0;
            box-shadow       : var(--shadow-tiny);

            &:first-child {
                margin-top : 0;
            }

            &[aria-label='facebook'] {
                color : var(--facebook);
            }
            &[aria-label='facebookmessenger'] {
                color : var(--messenger);
            }
            &[aria-label='linkedin'] {
                color : var(--linkedin);
            }
            &[aria-label='pinterest'] {
                color : var(--pinterest);
            }
            &[aria-label='twitter'] {
                color : var(--twitter);
            }
            &[aria-label='whatsapp'] {
                color : var(--whatsapp);
            }
        }
    }

    .title {
        position     : absolute;
        left         : -16px;
        top          : 50%;
        transform    : translateY(-50%) rotate(180deg);
        width        : auto;
        color        : var(--title);
        font-size    : 16px;
        font-style   : italic;
        writing-mode : vertical-rl;
        font-weight  : bold;
        white-space  : nowrap;
        opacity      : 0;
        z-index      : -1;
    }

    &.active {
        padding          : 5px;
        height           : auto;
        background-color : rgba(255, 255, 255, 0.4);
        transition       : .3s ease;
        box-shadow       : var(--shadow-smooth);
        
        .title {
            left             : -30px;
            opacity          : 1;
            transition       : .3s ease;
            transition-delay : .8s;
        }

        .share-container {
            visibility       : visible;
            overflow         : visible;
            max-height       : 500px;
            width            : 40px;
            transition       : .3s ease;

            button {
                height     : 36px;
                width      : 36px;
                transition : .3s ease;

                &[aria-label='facebook'] {
                    transition-delay : .1s;
                    &:after {
                        background-color : var(--facebook);
                    }
                }
                &[aria-label='facebookmessenger'] {
                    transition-delay : .2s;
                    &:after {
                        background-color : var(--messenger);
                    }
                }
                &[aria-label='linkedin'] {
                    transition-delay : .3s;
                    &:after {
                        background-color : var(--linkedin);
                    }
                }
                &[aria-label='pinterest'] {
                    transition-delay : .4s;
                    &:after {
                        background-color : var(--pinterest);
                    }
                }
                &[aria-label='twitter'] {
                    transition-delay : .5s;
                    &:after {
                        background-color : var(--twitter);
                    }
                }
                &[aria-label='whatsapp'] {
                    transition-delay : .6s;
                    &:after {
                        background-color : var(--whatsapp);
                    }
                }

                &:after {
                    content       : '';
                    position      : absolute;
                    top           : 0;
                    left          : 0;
                    height        : 36px;
                    width         : 36px;
                    border-radius : var(--rounded-full);
                    opacity       : 0;
                    z-index       : -1;
                    transition    : .3s ease;
                }
            
                &:hover {
                    &:after {
                        left       : -5px;
                        top        : -5px;
                        height     : 46px;
                        width      : 46px;
                        opacity    : 0.5;
                        transition : .3s ease;
                    }
                }
            }

            .closer {
                height           : 36px;
                width            : 36px;
                transition       : .3s ease;
                transition-delay : .2s;
            }
        }
    }

    .closer {
        display          : flex;
        align-items      : center;
        justify-content  : center;
        height           : 0;
        width            : 0;
        font-size        : 20px;
        color            : white;
        background-color : black;
        border-radius    : var(--rounded-full);
        margin           : 5px 0 0;
        box-shadow       : var(--shadow-tiny);
        cursor           : pointer;
    }
`

const ShareHandler = styled.div`
    position         : absolute;
    top              : 0;
    right            : 0;
    transform        : scale(1);
    transition       : .4s ease;
    cursor           : pointer;

    svg {
        position         : relative;
        height           : 40px;
        width            : 40px;
        padding          : 8px;
        color            : var(--twitter);
        background-color : white;
        border-radius    : var(--rounded-full);
        box-shadow       : var(--shadow-tiny);
        z-index          : 2;
    }

    &:after {
        content          : '';
        position         : absolute;
        left             : 0;
        top              : 0;
        height           : 40px;
        width            : 40px;
        background-color : var(--twitter);
        border-radius    : var(--rounded-full);
        opacity          : .3;
        z-index          : -1;
        transition       : .3s ease;
    }

    &:hover {
        &:after {
            left       : -7px;
            top        : -7px;
            height     : 54px;
            width      : 54px;
            transition : .3s ease;
        }
    }

    &.masked {
        transform: scale(0);
        transition : 0s ease;
    }
`