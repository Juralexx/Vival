import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { fullImage } from 'functions/utils'

const Cards = (props) => {
    const { cards } = props

    return (
        cards?.length > 0 && (
            <CardsContainer cardsLength={cards.length}>
                {cards.map((card, i) => {
                    const { image, title, subtitle, content, button_name, button_link } = card
                    return (
                        <Card key={i} isButton={button_name && button_link}>
                            <div
                                className="image"
                                style={fullImage(`${process.env.SERVER_URL}${image.url}`)}
                            />
                            <div className="content">
                                {title &&
                                    <div className="title">
                                        {title}
                                    </div>
                                }
                                {subtitle &&
                                    <div className="subtitle">
                                        {subtitle}
                                    </div>
                                }
                                {content &&
                                    <div className="text">
                                        {content}
                                    </div>
                                }
                                {button_name && button_link &&
                                    <Link href={button_link}>
                                        {button_name}
                                    </Link>
                                }
                            </div>
                        </Card>
                    )
                })}
            </CardsContainer>
        )
    )
}

export default Cards

const CardsContainer = styled.div`
    display  : grid;
    grid-gap : 20px;
    padding  : 40px 0 60px;

    ${props => props.cardsLength === 1 && css`
        grid-template-columns : 1fr;
    `};
    ${props => (props.cardsLength === 2 || props.cardsLength === 4) && css`
        grid-template-columns : 1fr 1fr;

        @media(max-width: 576px) {
            grid-template-columns : 1fr;
        }
    `};
    ${props => (props.cardsLength === 3 || props.cardsLength > 4) && css`
        grid-template-columns : 1fr 1fr 1fr;

        @media(max-width: 992px) {
            grid-template-columns : 1fr 1fr;
        }
        @media(max-width: 576px) {
            grid-template-columns : 1fr;
        }
    `};
`

const Card = styled.div`
    height        : 100%;
    width         : 100%;
    max-width     : 560px;
    border        : 1px solid var(--light-border);
    border-radius : var(--rounded-xl);
    box-shadow    : var(--shadow-x-smooth);
    overflow      : hidden;

    .image {
        position : relative;
        height   : 200px;
        width    : 100%;
    }

    .content {
        position       : relative;
        padding        : 20px;
        padding-bottom : ${props => props.isButton ? '65px' : '20px'};
        height         : calc(100% - 200px);

        .title {
            font-size   : 22px;
            font-weight : 600;
        }

        .subtitle {
            color     : var(--text-light);
            font-size : 14px;
        }

        .text {
            text-overflow      : ellipsis;
            overflow           : hidden;
            width              : 100%;
            line-height        : 1.4rem;
            display            : -webkit-box;
            -webkit-line-clamp : 6;
            -webkit-box-orient : vertical;
            margin             : 10px 0 20px;
        }
    }

    a {
        position         : absolute;
        bottom           : 20px;
        left             : 50%;
        transform        : translateX(-50%);
        padding          : 14px 50px 12px;
        text-align       : center;
        font-size        : 16px;
        line-height      : 16px;
        font-weight      : 500;
        border-radius    : 4px;
        color            : var(--white);
        background-color : rgba(var(--primary-rgb), 0.9);
    }

    @media(max-width: 992px) {
        position : relative;
        bottom   : 0;
    }
`