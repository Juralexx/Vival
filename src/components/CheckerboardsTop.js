import React from 'react'
import Link from "next/link";
import styled from 'styled-components';
import { Revealer } from 'tools/Revealer'
import { LinkStyledButton } from 'tools/Buttons';
import { fullImage } from 'functions/utils';

const CheckerboardsTop = ({ checkerboards }) => {
    return (
        <CheckerboardContainer id="checkerboard">
            {checkerboards.map((checkerboard, i) => {
                return (
                    <div className='checkerboard' key={i}>
                        <div className='container-lg'>
                            <div className='__grid'>
                                <div className='image' style={fullImage(`/img/checkerboard/checkerboard-${i + 3}.jpg`)} />
                                <div className="text">
                                    <Revealer>
                                        <h2>
                                            <Link href="#">{checkerboard.title}</Link>
                                        </h2>
                                    </Revealer>
                                    <Revealer delay={300}>
                                        <div dangerouslySetInnerHTML={{ __html: checkerboard.content }} />
                                    </Revealer>
                                    <Revealer delay={400}>
                                        <LinkStyledButton href={checkerboard.link}>{checkerboard.button_name}</LinkStyledButton>
                                    </Revealer>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </CheckerboardContainer>
    )
}

export default CheckerboardsTop

export const CheckerboardContainer = styled.div`

    @media(max-width: 992px) {
        padding : 50px 0 0;
    }

    .checkerboard {
        .__grid {
            display : grid;
            padding : 80px 0;
            width   : 100%;

            h2 {
                margin-bottom   : 20px;
                transform-style : preserve-3d;

                &:before {
                    content   : '';
                    position  : absolute;
                    left      : -30px;
                    top       : -40px;
                    width     : 100px;
                    height    : 100px;
                    transform : translateZ(-1px);

                    @media(max-width: 768px) {
                        left : -30px;
                    }
                }
            }

            .image {
                position        : relative;
                min-height      : 300px;
                border-radius   : var(--rounded-md);
                box-shadow      : var(--shadow-two);
                z-index         : 2;
                transform-style : preserve-3d;

                &:before {
                    content       : '';
                    position      : absolute;
                    left          : -30px;
                    top           : -30px;
                    width         : 100%;
                    height        : 100%;
                    border-radius : var(--rounded-md);
                    transform     : translateZ(-1px);

                    @media(max-width: 768px) {
                        left : -15px;
                    }
                }
            }

            .text {
                display         : flex;
                flex-direction  : column;
                justify-content : center;

                p {
                    margin-bottom : 20px;
                }
            }

            @media(max-width: 768px) {
                padding : 80px 10px 50px;
            }
        }

        &:nth-child(1) {
            background : var(--bg-two);
            h2 {
                &:before {
                    background-color : rgba(var(--primary-rgb), 0.2);
                }
            }
            
            .image {
                order : 2;

                &:before {
                    background-color : rgba(var(--primary-rgb), 0.2);
                }
            }
        }
        &:nth-child(even) {
            h2 {
                &:before {
                    background : var(--bg-two);
                }
            }

            .image {
                &:before {
                    background : var(--green);
                }
            }
        }
        &:nth-child(3) {
            background : var(--green);

            h2 {
                &:before {
                    background : rgba(var(--primary-rgb), 0.2);
                }
            }

            .image {
                order : 2;
                &:before {
                    background : rgba(var(--primary-rgb), 0.2);
                }
            }
        }

        &:nth-child(odd) {
            .__grid {
                grid-template-columns : 1fr 0.8fr;

                .text {
                    order   : 1;
                    padding : 40px 60px 40px 40px;
                }

                @media(max-width: 992px) {
                    grid-template-columns : 1.2fr 1fr;

                    .text {
                        padding : 10px 30px 10px 0;
                    }
                }

                @media(max-width: 768px) {
                    grid-template-columns : 1fr;
                    .text {
                        order      : 2;
                        padding    : 60px 15px 0;
                        text-align : justify;
                    }
                }
                @media(max-width: 576px) {
                    .text {
                        h2 {
                            margin-bottom : 10px;
                        }
                    }
                }
            }
        }

        &:nth-child(even) {
            .__grid {
                grid-template-columns : 0.8fr 1fr;

                @media(max-width: 768px) {
                    grid-template-columns : 1fr;
                }

                .text {
                    padding : 40px 40px 40px 60px;
                }

                @media(max-width: 992px) {
                    grid-template-columns : 1fr 1.2fr;

                    .text {
                        padding : 10px 0 10px 30px;
                    }
                }

                @media(max-width: 768px) {
                    grid-template-columns : 1fr;
                    .text {
                        padding    : 60px 15px 0;
                        text-align : justify;
                    }
                }
                @media(max-width: 576px) {
                    .text {
                        h2 {
                            margin-bottom : 10px;
                        }
                    }
                }
            }
        }
    }
`