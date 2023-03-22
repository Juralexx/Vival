import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import styled from 'styled-components';
import { Revealer } from 'tools/Revealer'
import { LinkStyledButton } from 'tools/Buttons';

const CheckerboardModern = ({ checkerboards }) => {
    return (
        <React.Fragment>
            {checkerboards?.length > 0 &&
                <CheckerBoardDestructuredOne>
                    <div className="checkerboard-container">
                        <div className="text col-12 col-sm-12 col-md-8 col-lg-6 col-xl-5">
                            <Revealer delay={200}>
                                <h2>
                                    <Link href="#">{checkerboards[0]?.title}</Link>
                                </h2>
                            </Revealer>
                            <Revealer delay={300}>
                                <div
                                    className='content'
                                    dangerouslySetInnerHTML={{ __html: checkerboards[0]?.content }}
                                />
                            </Revealer>
                            <Revealer delay={400} className="button">
                                <LinkStyledButton href="#">{checkerboards[0]?.button_name}</LinkStyledButton>
                            </Revealer>
                        </div>

                        <div className="image col-12 col-sm-12 col-md-8 col-lg-6 col-xl-7">
                            <Image
                                className="img-big"
                                src="/img/checkerboard/checkerboard-1.jpg"
                                alt={checkerboards[0]?.title}
                                title={checkerboards[0]?.title}
                                width={500}
                                height={370}
                            />
                            <Image
                                className="img-small"
                                src="/img/checkerboard/checkerboard-1-bis.jpg"
                                alt={checkerboards[0]?.title}
                                title={checkerboards[0]?.title}
                                width={330}
                                height={250}
                            />
                        </div>
                    </div>
                </CheckerBoardDestructuredOne>
            }

            {checkerboards?.length > 1 &&
                <CheckerBoardDestructuredTwo>
                    <div className="checkerboard-container">
                        <div className="image col-12 col-sm-12 col-md-8 col-lg-6 col-xl-7">
                            <div className="background"></div>
                            <Image
                                src="/img/checkerboard/checkerboard-2.jpg"
                                alt={checkerboards[1]?.title}
                                title={checkerboards[1]?.title}
                                width={500}
                                height={370}
                            />
                        </div>
                        <div className="text col-12 col-sm-12 col-md-8 col-lg-6 col-xl-5">
                            <Revealer delay={200}>
                                <h2>
                                    <Link href="#">{checkerboards[1]?.title}</Link>
                                </h2>
                            </Revealer>
                            <Revealer delay={300}>
                                <div
                                    className='content'
                                    dangerouslySetInnerHTML={{ __html: checkerboards[1]?.content }}
                                />
                            </Revealer>
                            <Revealer delay={400} className="button">
                                <LinkStyledButton href="#">{checkerboards[1]?.button_name}</LinkStyledButton>
                            </Revealer>
                        </div>
                    </div>
                </CheckerBoardDestructuredTwo>
            }

            {checkerboards?.length > 2 &&
                <CheckerBoardDestructuredThree>
                    <div className="checkerboard-container">
                        <div className="text col-12 col-sm-12 col-md-8 col-lg-6 col-xl-5">
                            <Revealer delay={200}>
                                <h2>
                                    <Link href="#">{checkerboards[2]?.title}</Link>
                                </h2>
                            </Revealer>
                            <Revealer delay={300}>
                                <div
                                    className='content'
                                    dangerouslySetInnerHTML={{ __html: checkerboards[2]?.content }}
                                />
                            </Revealer>
                            <Revealer delay={400} className="button">
                                <LinkStyledButton href="#">{checkerboards[0]?.button_name}</LinkStyledButton>
                            </Revealer>
                        </div>

                        <div className="image col-12 col-sm-12 col-md-8 col-lg-6 col-xl-7">
                            <Image
                                src="/img/checkerboard/checkerboard-3.jpg"
                                alt={checkerboards[2]?.title}
                                title={checkerboards[2]?.title}
                                width={500}
                                height={370}
                            />
                        </div>
                    </div>
                </CheckerBoardDestructuredThree>
            }
        </React.Fragment>
    )
}

export default CheckerboardModern

const CheckerBoardDestructured = styled.div`
    padding  : 50px 0;
    width    : 100%;
    position : relative;

    .checkerboard-container {
        position        : relative;
        width           : auto;
        max-width       : 1500px;
        margin          : 0 auto;
        display         : flex;
        align-items     : flex-end;
        justify-content : center;

        .image {
            position    : relative;
            display     : flex;
            align-items : center;
            height      : 450px;
            width       : 100%;
            transition  : 1s ease;
            flex        : 0 0 100%;

            &:after {
                position : absolute;
                content  : "";
                display  : block;
            }

            &:before {
                position : absolute;
                content  : "";
                display  : block;
            }
        }
    
        .text {
            position        : relative;
            display         : flex;
            flex-direction  : column;
            align-items     : center;
            justify-content : center;
            height          : 450px;
            /* width           : 40%; */
            padding         : 0 60px;

            > div {
                width : 100%;
            }

            h2 {
                width         : 100%;
                padding-left  : 0;
                font-weight   : 600;

                a {
                    font-size : 36px;
                }
            }
    
            .content {
                padding : 30px 0 15px;
            }
        }
        .button {
            display : flex;
        }
    }

    @media(min-width: 1201px) {
        .checkerboard-container {
            .image {
                max-width : 650px;
            }
        }
    }

    @media(max-width:1200px) {
        padding : 50px 0;
        .checkerboard-container {
            .image {
                transform : scale(0.88);
                z-index   : -1;
            }
            .text {
                padding : 0 15px;
            }
        }  
    }

    @media(max-width: 992px) {
        padding : 50px 0 0;
        .checkerboard-container {
            flex-direction : column;

            .image {
                margin          : 0 auto;
                justify-content : center;
            }
            .text {
                width   : 500px;
                height  : auto;
                margin  : 0 auto;
                padding : 30px 0;
            }
        }
    }

    @media(max-width: 768px) {
        .checkerboard-container {
            .image {
                transform: scale(1);
            }
            h2 {
                &:before, &:after {
                    content : none !important;
                }
            }
        }
    }
    
    @media(max-width:576px) {
        .checkerboard-container {
            .text {
                width   : 100%;
                padding : 30px 15px;
            }
            .image {
                width           : 100%;
                height          : auto;
                min-width       : 100%;
                max-width       : unset;
                justify-content : unset;
                border-radius   : 0;

                .img-big {
                    width           : 100%;
                    height          : auto;
                    min-width       : 100%;
                    max-width       : unset;
                    justify-content : unset;
                    border-radius   : 0;
                }

                img {
                    width         : 100% !important;
                    height        : auto !important;
                    border-radius : 0;
                }
            }
        }
    }
`

const CheckerBoardDestructuredOne = styled(CheckerBoardDestructured)`
    .checkerboard-container {
        .image {
            order : 2;
            &:after {
                width         : 500px;
                height        : 370px;
                right         : 10px;
                bottom        : 10px;
                background    : rgba(var(--primary-light-rgb), 0.5);
                z-index       : -1;
                border-radius : var(--rounded-xl);
            }
            &:before {
                width         : 350px;
                height        : 210px;
                left          : -150px;
                top           : -30px;
                background    : var(--primary-xxlight);
                z-index       : -1;
                border-radius : var(--rounded-xl);
            }
            .img-big {
                position      : relative;
                display       : block;
                width         : 500px;
                height        : 370px;
                border-radius : var(--rounded-xl);
                box-shadow    : var(--shadow-colored);
            }
            .img-small {
                position      : absolute;
                right         : -40px;
                bottom        : -30px;
                width         : 332px;
                height        : 249px;
                border-left   : 5px solid white;
                border-top    : 5px solid white;
                border-radius : var(--rounded-xl);
                box-shadow    : var(--shadow-colored);
            }
        }
        .text {
            order : 1;
            h2 {
                text-align : right;
                transition : .5s ease;

                &:before {
                    display    : inline-block;
                    margin     : 0 20px 8px 0;
                    height     : 2px;
                    content    : " ";
                    background : var(--primary-light);
                    width      : 17%;
                    transition : .5s ease;
                }

                &:hover {
                    color        : var(--primary);
                    transition   : .5s ease;

                    &:before {
                        width      : 22%;
                        transition : .5s ease;
                    }
                }
            }
            .content {
                text-align : right;
            }
        }
        .button {
            justify-content : flex-end;
        }
    }

    @media(max-width: 992px) {
        .checkerboard-container {
            .image {
                order : 1;
                &:after {
                    width  : 500px;
                    bottom : -15px;
                }
                &:before {
                    left : -10px;
                    top  : -30px;
                }
            }
            .text {
                order   : 2;
                h2,
                .content {
                    text-align : left;
                }
            }
            .button {
                justify-content : flex-start;
            }
        }
    }

    @media(max-width: 768px) {
        .checkerboard-container {
            .image {
                order : 1;
                &:after {
                    bottom : -25px;
                    right  : 10px;
                }
                &:before {
                    left : -10px;
                    top  : -30px;
                }

                .img-small {
                    display : none;
                }
            }
        }
    }
    
    @media(max-width:576px) {
        .checkerboard-container {
            .image {
                order : 1;
                &:after {
                    width  : 130px;
                    height : 130px;
                    bottom : -20px;
                    right  : -10px;
                }
                &:before {
                    width  : 200px;
                    height : 150px;
                    left   : -10px;
                    top    : -30px;
                }

                .img-small {
                    display : none;
                }
            }
        }
    }
`

const CheckerBoardDestructuredTwo = styled(CheckerBoardDestructured)`
    .checkerboard-container {
        .image {
            align-items     : center;
            justify-content : flex-end;
            &:after {
                width         : 500px;
                height        : 257px;
                right         : -180px;
                bottom        : -50px;
                background    : rgba(var(--primary-xlight-rgb), 0.4);
                z-index       : -1;
                border-radius : var(--rounded-xl);
            }
            &:before {
                width         : 200px;
                height        : 200px;
                right         : -30px;
                top           : -100px;
                background    : var(--primary-xxlight);
                z-index       : 0;
                border-radius : var(--rounded-xl);
            }
            .background {
                position   : absolute;
                display    : block;
                width      : 470px;
                height     : 500px;
                right      : 100px;
                bottom     : 00px;
                background : rgba(var(--primary-light), 0.5);
                z-index    : 0;
            }
            img {
                position      : relative;
                display       : block;
                width         : 500px;
                height        : 370px;
                border-radius : var(--rounded-xl);
                box-shadow    : var(--shadow-colored);
            }
        }
        .text {
            h2 {
                text-align : left;
                transition : .5s ease;
    
                &:after {
                    display    : inline-block;
                    margin     : 0 0 8px 20px;
                    height     : 2px;
                    content    : " ";
                    background : var(--primary-light);
                    width      : 17%;
                    transition : .5s ease;
                }

                &:hover {
                    color       : var(--primary);
                    transition  : .5s ease;

                    &:after {
                        width      : 22%;
                        transition : .5s ease;
                    }
                }
            }
            .content {
                text-align : left;
            }
            
        }
        .button {
            justify-content : flex-start;
        }
    }

    @media(max-width: 992px) {
        .checkerboard-container {
            .image {
                justify-content : center;
                &:after {
                    width  : 300px;
                    left   : 0px;
                    right  : unset;
                    bottom : -50px;
                }
            }
            .text {
                h2,
                .content {
                    text-align : right;
                }
            }
            .button {
                justify-content : flex-end;
            }
        }
    }
    
    @media(max-width: 768px) {
        .checkerboard-container {
            .image {
                &:after {
                    width  : 300px;
                    left   : 0px;
                    right  : unset;
                    bottom : -50px;
                }
            }
        }
    }
`

const CheckerBoardDestructuredThree = styled(CheckerBoardDestructured)`
    .checkerboard-container {
        .image {
            order : 2;
            &:after {
                width         : 200px;
                height        : 200px;
                right         : 10px;
                top           : 0;
                background    : rgba(var(--primary-light-rgb), 0.5);
                z-index       : -1;
                border-radius : var(--rounded-xl);
            }

            &:before {
                width      : 500px;
                height     : 200px;
                left       : -300px;
                bottom     : -20px;
                background : var(--primary-xxlight);
                z-index    : -2;
                border-radius : var(--rounded-xl);
            }

            img {
                position      : relative;
                display       : block;
                width         : 500px;
                height        : 370px;
                border-radius : var(--rounded-xl);
                box-shadow    : var(--shadow-colored);
            }
        }
        .text {
            order : 1;
            h2 {
                text-align : right;
                transition : .5s ease;

                &:before {
                    display    : inline-block;
                    margin     : 0 20px 8px 0;
                    height     : 2px;
                    content    : " ";
                    background : var(--primary-light);
                    width      : 17%;
                    transition : .5s ease;
                }

                &:hover {
                    color        : var(--primary);
                    transition   : .5s ease;

                    &:before {
                        width      : 22%;
                        transition : .5s ease;
                    }
                }
            }
            .content {
                text-align : right;
            }
        }
        .button {
            justify-content : flex-end;
        }
    }
    
    @media(max-width: 992px) {
        .checkerboard-container {
            .image {
                order : 1;
                &:after {
                    top  : -30px;
                }

                &:before {
                    left   : 0;
                    bottom : -20px;
                }
            }
            .text { 
                order : 2;
                h2,
                .content {
                    text-align : left;
                }
            }
            .button {
                justify-content : flex-start;
            }
        }
    }
    
    @media(max-width: 768px) {
        .checkerboard-container {
            .image {
                order : 1;
                &:after {
                    top  : -30px;
                }

                &:before {
                    left   : 0;
                    bottom : -20px;
                }
            }
        }
    }
    
    @media(max-width:576px) {
        .checkerboard-container {
            .image {
                order : 1;
                &:after {
                    width  : 150px;
                    height : 150px;
                    right  : -20px;
                    top    : -30px;
                }

                &:before {
                    width  : 150px;
                    height : 150px;
                    left   : -20px;
                    bottom : -50px;
                }
            }
        }
    }
`