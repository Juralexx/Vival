import React from "react";
import styled from "styled-components";
import { Revealer } from 'tools/Revealer'
import { LinkStyledButton } from 'tools/Buttons'
import CardVertical from "./CardVertical";
import CardHorizontal from "./CardHorizontal";

const ActualityCarousel = ({ actualities }) => {
    const [actus, setActus] = React.useState(actualities.slice(0, 3))
    const [state, setState] = React.useState(0)

    React.useEffect(() => {
        if (actualities.length > 3) {
            if (state === 0) {
                const timer = setTimeout(() => {
                    setActus(actualities.slice(3, 6))
                    setState(1)
                }, 10400)
                return () => clearTimeout(timer)
            }
            if (state === 1) {
                const timer = setTimeout(() => {
                    setActus(actualities.slice(0, 3))
                    setState(0)
                }, 10400)
                return () => clearTimeout(timer)
            }
        }
    }, [state, actualities])

    return (
        <ActualityCarouselContainer className="container-lg" id="actuality-carousel">
            <h2>À la une</h2>
            {actus?.length > 2 ? (
                <div className="__grid">
                    <Revealer>
                        <CardVertical actuality={actus[0]} className='animated-to-left' />
                    </Revealer>
                    <div className="__grid-right">
                        {actus && (
                            actus.length > 1 && (
                                actus.slice(1, 3).map((actu, key) => {
                                    return (
                                        <Revealer key={key} origin="right">
                                            <CardHorizontal
                                                className={key % 2 ? '__to-right animated-to-bottom' : '__to-left animated-to-right'}
                                                actuality={actu}
                                            />
                                        </Revealer>
                                    )
                                })
                            ))}
                    </div>
                </div>
            ) : (
                <div className="__grid-both">
                    {actus?.slice(0, 2).map((actu, key) => {
                        return (
                            <Revealer key={key}>
                                <CardVertical actuality={actu} />
                            </Revealer>
                        )
                    })}
                </div>
            )}
            <LinkStyledButton href="/actualites" className="more-btn">
                Voir toute l'actualité
            </LinkStyledButton>
        </ActualityCarouselContainer>
    )
}

export default ActualityCarousel

const ActualityCarouselContainer = styled.div`
    display        : flex;
    flex-direction : column;
    padding        : 50px 0;

    h2 {
        margin-bottom : 40px;
        text-align    : center;
    }

    h3 {
        a {
            font-size          : 24px;
            font-weight        : 600;
            text-overflow      : ellipsis;
            overflow           : hidden;
            width              : 100%;
            line-height        : 30px;
            display            : -webkit-box;
            -webkit-line-clamp : 1;
            -webkit-box-orient : vertical;
        }
    }

    .animated-to-left,
    .animated-to-right,
    .animated-to-bottom {
        animation-duration : 10.4s;
        animation-timing-function : ease;
        animation-iteration-count : infinite;
    }

    .animated-to-left {
        animation-name : animated-to-left;
        animation-delay : 9.2s;
    }
    .animated-to-right {
        animation-name : animated-to-right;
        animation-delay : 9.3s;
    }
    .animated-to-bottom {
        animation-name : animated-to-bottom;
        animation-delay : 9.4s;
    }

    @keyframes animated-to-left {
        0%, 5% {
            opacity    : 1;
            transform  : translateX(0);
        }
        10% {
            opacity   : 0;
            transform : translateX(-10px);
        }
        15%, 100% {
            opacity   : 1;
            transform : translateX(0);
        }
    }

    @keyframes animated-to-right {
        0%, 5% {
            opacity    : 1;
            transform  : translateX(0);
        }
        10% {
            opacity   : 0;
            transform : translateX(10px);
        }
        15%, 100% {
            opacity   : 1;
            transform : translateX(0);
        }
    }

    @keyframes animated-to-bottom {
        0%, 5% {
            opacity    : 1;
            transform  : translateY(0);
        }
        10% {
            opacity   : 0;
            transform : translateY(10px);
        }
        15%, 100% {
            opacity   : 1;
            transform : translateY(0);
        }
    }

    .more-btn {
        margin : 30px auto;
    }

    .btn-container {
        display     : flex;
        align-items : center;
    }

    .more {
        position      : relative;
        display       : inline-flex;
        align-items   : center;
        font-size     : 18px;
        line-height   : 18px;
        font-weight   : 500;
        color         : var(--primary);
        border-radius : var(--rounded-md);
        transition    : 0.4s ease-in-out;

        &:hover {
            color : var(--primary-dark);
        }

        svg {
            height      : 20px;
            width       : 20px;
            margin-left : 7px;
        }
    }

    .__grid {
        display               : grid;
        grid-template-columns : 1fr 2fr;
        grid-gap              : 20px;
    }

    @media(max-width: 992px) {
        padding : 50px 50px;
        .__grid {
            grid-template-columns : 1fr;
        }
    }
    @media(max-width: 768px) {
        padding : 50px 15px;
    }

    .__grid-both {
        display               : grid;
        grid-template-columns : 1fr 1fr;
        grid-gap              : 20px;

        @media(max-width: 768px) {
            grid-template-columns : 1fr;
        }
    }

    .__grid-right {
        display               : grid;
        grid-template-columns : 1fr;
        grid-gap              : 20px;
    }
`