import React from 'react'
import Link from "next/link";
import styled from 'styled-components';
import { fullImage } from 'functions/utils'
import { Revealer } from 'tools/Revealer'
import { LinkStyledButton } from 'tools/Buttons';

const Checkerboard = ({ checkerboards }) => {
    return (
        <CheckerboardContainer className="container-lg" id="checkerboard">
            {checkerboards.map((checkerboard, i) => {
                return (
                    <div className='__grid' key={i}>
                        <div className="image" style={fullImage(`././img/checkerboard/checkerboard-${i + 3}.jpg`)}></div>
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
                )
            })
            }
        </CheckerboardContainer>
    )
}

export default Checkerboard

export const CheckerboardContainer = styled.div`
    padding : 50px 0;

    @media(max-width: 992px) {
        padding : 50px 15px;
    }

    .__grid {
        display : grid;
        margin  : 15px 0;
        width   : 100%;

        .image {
            position      : relative;
            min-height    : 300px;
            border-radius : var(--rounded-xl);
            box-shadow    : var(--shadow-colored);
        }

        .text {
            display         : flex;
            flex-direction  : column;
            justify-content : center;
            padding         : 40px;

            p {
                margin-bottom : 20px;
                max-width     : 650px;
            }
        }

        &:nth-child(even) {
            grid-template-columns : 2fr 1fr;

            h2 {
                margin-bottom : 20px;
                padding-right : 10px;
                border-right  : 3px solid var(--primary);
            }
            
            .image {
                order : 2;
            }

            .text {
                order : 1;

                h2,
                p,
                div {
                    text-align  : right;
                    margin-left : auto;
                }
            }

            @media(max-width: 768px) {
                grid-template-columns : 1fr;
                .text {
                    order : 2;
                }

                .image {
                    order : 1;
                }
            }
        }

        &:nth-child(odd) {
            grid-template-columns : 1fr 2fr;

            @media(max-width: 768px) {
                grid-template-columns : 1fr;
            }

            h2 {
                text-align    : left;
                margin-bottom : 20px;
                padding-left  : 10px;
                border-left   : 3px solid var(--primary);
            }
        }

        @media(max-width: 768px) {
            .text {
                padding : 40px 0;
            }
        }
    }
`