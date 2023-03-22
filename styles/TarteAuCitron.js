import { css } from "styled-components";


export const TarteAuCitronCard = css`
    #tarteaucitronRoot {
        #tarteaucitronAlertBig {
            display       : block;
            position      : fixed;
            bottom        : 20px;
            left          : 20px;
            width         : 600px;
            max-width     : 600px;
            max-height    : 210px;
            color         : var(--text);
            background    : var(--body);
            border-radius : var(--rounded-md);
            box-shadow    : var(--shadow-colored);
            padding       : 20px;
            animation     : 1s ease-out 0s cookies-card-left;
            box-sizing    : border-box;
            z-index       : 1000;

            &:before {
                font-size   : 22px;
                font-weight : bold;
                color       : var(--title);
            }

            #tarteaucitronDisclaimerAlert {
                font-size   : 16px;
                line-height : 20px;
                color       : var(--text);
                text-align  : left;
                padding     : 5px 0 45px;
                margin      : 0;
            }

            #tarteaucitronPrivacyUrl {
                position     : absolute;
                color        : var(--grey);
                font-size    : 14px;
                bottom       : 83px;
                height       : 20px;
                padding-left : 17px;
                width        : auto;
                font-weight  : 400;

                &:hover {
                    &:after {
                        content          : '';
                        position         : absolute;
                        bottom           : 0;
                        right            : 0;
                        width            : calc(100% - 17px);
                        height           : 1px;
                        background-color : var(--grey);
                    }
                }

                &:before {
                    content          : '';
                    position         : absolute;
                    bottom           : 50%;
                    transform        : translateY(48%);
                    left             : 0;
                    width            : 14px;
                    height           : 14px;
                    background-image : url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24px' height='24px' viewBox='0 0 24 24' version='1.1'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cmask fill='white'%3E%3Cuse /%3E%3C/mask%3E%3Cg /%3E%3Cpath d='M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z' fill='%2378807a' /%3E%3C/g%3E%3C/svg%3E");                                background-position : center;
                    background-size  : cover;
                }
            }

            button {
                width         : 32.33%;
                height        : 44px;
                border-radius : var(--rounded-sm);
                margin        : 0 .5% !important;
                padding       : 0;
                float         : right;
                font-size     : 16px;
                line-height   : 16px;

                &.tarteaucitronAllow {
                    background : var(--primary);
                    &:hover {
                        background-color: var(--primary-light);
                    }
                }

                &#tarteaucitronCloseAlert,
                &.tarteaucitronDeny {
                    color      : var(--text);
                    background : var(--primary-xxlight);
                    &:hover {
                        color            : var(--white);
                        background-color : var(--primary-light);
                    }
                }

                &.tarteaucitronDeny {
                    color      : var(--text);
                    background : var(--primary-xxlight);
                }

                svg {
                    font-size    : 20px;
                    margin-right : 5px;
                }
            }

            #tarteaucitronCloseCross {
                position      : absolute;
                top           : 10px;
                right         : 6px;
                padding       : 5px;
                width         : 25px;
                height        : 25px;
                border-radius : var(--rounded-full);
                cursor        : pointer;
                color         : rgba(255, 255, 255, 0) !important;

                &:hover {
                    background-color : var(--primary-xxlight);
                }

                &:before {
                    content  : '';
                    position : absolute;
                    left     : 0;
                    top      : 0;
                    width    : 20px;
                    height   : 20px;
                }

                &:before,
                &:after {
                    content       : '';
                    position      : absolute;
                    top           : 15%;
                    left          : calc(50% - .0625em);
                    width         : 2px;
                    height        : 20px;
                    border-radius : .125em;
                    transform     : rotate(45deg);
                    background    : var(--grey);
                }

                &:after {
                    transform : rotate(-45deg);
                }
            }
        }
    }

    @media(max-width: 768px) {
        #tarteaucitronRoot {
            #tarteaucitronAlertBig {
                bottom        : 0 !important;
                left          : 0 !important;
                width         : 100% !important;
                max-width     : 100%;
                max-height    : 500px;
                border-radius : 0 !important;
                box-shadow    : var(--shadow-top) !important;
                animation     : 1s ease-out 0s cookies-card-bottom;
                z-index       : 1000;
            }
        }
    }

    @media(max-width:576px) {
        #tarteaucitronRoot {
            #tarteaucitronAlertBig {
                &:before {
                    font-size : 20px;
                }
                button {
                    max-width : unset;
                    min-width : 100%;
                    margin    : 5px 0 !important;
                    float     : none;
                }
                #tarteaucitronPrivacyUrl {
                    bottom    : 190px;
                    min-width : unset;
                }
            }
        }
    }

    @keyframes cookies-card-left {
        0% {
            left : -100%;
        } 100% {
            left : 20px;
        }
    }

    @keyframes cookies-card-bottom {
        0% {
            bottom : -100%;
        } 100% {
            bottom : 0;
        }
    }
`

export const TarteAuCitronPanel = css`
    #tarteaucitronRoot {

        * {
            color : var(--text);
        }

        #tarteaucitronBack {
            background : rgba(0, 0, 0, 0.8);
        }

        .tarteaucitronH1 {
            font-size     : 1.3em;
            font-weight   : 600;
            color         : var(--title);
            margin-bottom : 10px;
            text-align    : left;
        }

        .tarteaucitronH2 {
            font-size : 1.2em;
            color     : var(--title);
        }

        .tarteaucitronH3 {
            font-size   : 14px;
            margin      : 0;
            font-weight : 400;
        }

        #tarteaucitron {
            a {
                color : var(--grey-md);
            }
            #tarteaucitronServices {
                height        : auto !important;
                padding       : 20px;
                background    : white;
                box-shadow    : var(--shadow-one);
                border-radius : var(--rounded-md);
                margin        : 0;

                #tarteaucitronMainLineOffset {
                    background-color : var(--body);
                    border           : none;
                    padding-bottom   : 20px;

                    #tarteaucitronInfo {
                        position    : relative;
                        padding     : 5px 0 20px;
                        font-size   : 14px;
                        font-weight : 400;
                        min-width   : 100%;
                        color       : var(--text);

                        #tarteaucitronPrivacyUrlDialog {
                            padding     : 0 0 0 17px;
                            margin      : 0;
                            color       : var(--grey);
                            position    : absolute;
                            bottom      : 15px;
                            white-space : nowrap;

                            &:hover {
                                &:after {
                                    content          : '';
                                    position         : absolute;
                                    bottom           : 0;
                                    right            : 0;
                                    width            : calc(100% - 17px);
                                    height           : 1px;
                                    background-color : var(--grey);
                                }
                            }

                            &:before {
                                content          : '';
                                position         : absolute;
                                bottom           : 50%;
                                transform        : translateY(48%);
                                left             : 0;
                                width            : 14px;
                                height           : 14px;
                                background-image : url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24px' height='24px' viewBox='0 0 24 24' version='1.1'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cmask fill='white'%3E%3Cuse /%3E%3C/mask%3E%3Cg /%3E%3Cpath d='M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z' fill='%2378807a' /%3E%3C/g%3E%3C/svg%3E");                                background-position : center;
                                background-size  : cover;
                            }
                        }
                    }

                    .tarteaucitronName {
                        margin-top  : 10px;
                        .tarteaucitronH2 {
                            font-weight : 600;
                        }
                    }

                    .tarteaucitronAsk {
                        display : flex !important;
                        margin-top: 10px;
                    }
                }
                
                #tarteaucitronServices_mandatory {
                    .tarteaucitronAllow {
                        background-color : var(--primary);
                    }
                }

                .tarteaucitronDetails {
                    color            : var(--text);
                    background-color : var(--grey-xlight);
                    box-shadow       : var(--shadow-tiny);
                    padding          : 10px;
                    border-radius    : var(--rounded-sm);
                    left             : .5px
                }
            }

            .tarteaucitronLine {
                .tarteaucitronAllow,
                .tarteaucitronDeny {
                    background-color : var(--grey-light);
                    &:hover {
                        background-color: var(--primary-light);
                    }
                    &.tarteaucitronIsSelected {
                        background-color : var(--primary);
                    }
                }
                &.tarteaucitronIsAllowed {
                    .tarteaucitronAllow {
                        background-color : var(--primary);
                    }
                    .tarteaucitronDeny {
                        background-color : var(--grey-light);
                        &:hover {
                            background-color: var(--primary-light);
                        }
                    }
                }
                &.tarteaucitronIsDenied {
                    .tarteaucitronAllow {
                        background-color : var(--grey-light);
                        &:hover {
                            background-color: var(--primary-light);
                        }
                    }
                    .tarteaucitronDeny {
                        background-color : var(--primary);
                    }
                }
            }

            .tarteaucitronAllow,
            .tarteaucitronDeny {
                display         : flex;
                align-items     : center;
                justify-content : center;
                min-width       : 125px;
                font-size       : 14px;
                line-height     : 14px;
                border-radius   : 4px;
                padding         : 12px 10px;
                margin          : 0 5px;
            }
        }

        .tarteaucitronCheck,
        .tarteaucitronCross {
            display : none;
        }

        .tarteaucitronBorder {
            padding-top : 20px;
            margin      : 0;
            border-top  : 1px solid var(--grey-light);

            .tarteaucitronLine  {
                padding : 6px 0;

                .tarteaucitronName {
                    margin    : 0 !important;
                    max-width : 46%;

                    .tarteaucitronListCookies {
                        color      : var(--grey-md);
                        font-style : italic;
                    }
                }

                .tarteaucitronAsk {
                    display         : flex !important;
                    justify-content : flex-end;
                    width           : 50%;
                    max-width       : 380px;
                }
            }

            .tarteaucitronTitle {
                button {
                    padding    : 0;
                    font-size  : 16px;
                    color      : var(--title);
                }
            }
        }

        .tarteaucitronPlus {
            &:before {
                color       : var(--title);
                font-weight : 400;
            }
        }

        #tarteaucitronClosePanel {
            top           : 7px;
            right         : 5px;
            padding       : 0;
            width         : 36px;
            height        : 36px;
            font-size     : 0;
            border-radius : var(--rounded-full);
            z-index       : 1000;

            &:before {
                content  : '';
                position : absolute;
                left     : 0;
                top      : 0;
                width    : 20px;
                height   : 20px;
            }

            &:before,
            &:after {
                content       : '';
                position      : absolute;
                top           : 22%;
                left          : calc(50% - .0625em);
                width         : 2px;
                height        : 20px;
                border-radius : .125em;
                transform     : rotate(45deg);
                background    : var(--grey);
            }

            &:after {
                transform : rotate(-45deg);
            }

            &:hover {
                background: var(--grey-xlight);
            }
        }
    }

    @media(max-width: 768px) {
        #tarteaucitronRoot {
            #tarteaucitron {
                #tarteaucitronServices {
                    height : 100vh !important;
                    #tarteaucitronMainLineOffset {
                        #tarteaucitronInfo {
                            font-size : 14px;
                            min-width : 100%;
                        }
                        .tarteaucitronAsk {
                            flex-direction : column !important;
                            #tarteaucitronAllAllowed,
                            #tarteaucitronAllDenied {
                                box-sizing : border-box;
                                margin     : 4px 0;
                            }
                        }
                    }
                }
            }
        }
    }
`