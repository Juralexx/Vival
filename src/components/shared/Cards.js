import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'

const Cards = (props) => {
    const { component } = props
    const { title, columns, cards } = component

    const getColumns = (columns) => {
        switch (columns) {
            case 'Un': return 1
            case 'Deux': return 2
            case 'Trois': return 3
            case 'Quatre': return 4
            default: return 3
        }
    }

    return (
        cards?.length > 0 && (
            <CardsContainer columns={getColumns(columns)}>
                {title &&
                    <h2>{title}</h2>
                }
                <div className='cards-container'>
                    {cards.map((card, i) => {
                        const { image, title, subtitle, content, button_name, button_link } = card
                        return (
                            <div className='card-container' key={i}>
                                <Card isButton={button_name && button_link}>
                                    <div className="image">
                                        <Image
                                            src={`${process.env.SERVER_URL}${image.url}`}
                                            alt={image.alternativeText || card.title || ''}
                                            title={image.alternativeText || card.title || ''}
                                            width={0}
                                            height={0}
                                            style={{ width: '100%' }}
                                            unoptimized={true}
                                        />
                                    </div>
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
                                            <div className="text" dangerouslySetInnerHTML={{ __html: content }} />
                                        }
                                        {button_name && button_link &&
                                            <Link href={button_link}>
                                                {button_name}
                                            </Link>
                                        }
                                    </div>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </CardsContainer>
        )
    )
}

export default Cards

const CardsContainer = styled.div`
    padding : 40px 0 60px;

    .cards-container {
        display               : grid;
        grid-gap              : 20px;
        grid-template-columns : ${props => props.columns ? `repeat(${props.columns}, minmax(0, 1fr))` : 'repeat(3, minmax(0, 1fr))'};

        @media(max-width: 992px) {
            grid-template-columns : repeat(3, minmax(0, 1fr));
            grid-gap              : 15px;
        }
        @media(max-width: 576px) {
            grid-template-columns : repeat(2, minmax(0, 1fr));
            grid-gap              : 10px;
        }
    }

    h2 {
        padding-bottom : 20px;
    }
`

const Card = styled.div`
    height        : auto;
    width         : 100%;
    max-width     : 560px;
    border        : 1px solid var(--border);
    border-radius : var(--rounded-xl);
    box-shadow    : var(--shadow-lg-colored);
    overflow      : hidden;

    .image {
        position : relative;
        height   : 200px;
        width    : 100%;

        img {
            width      : 100%;
            height     : 100%;
            object-fit: scale-down;
        }
    }

    .content {
        position       : relative;
        padding        : 10px;
        padding-bottom : ${props => props.isButton ? '65px' : '20px'};
        height         : calc(100% - 200px);

        .title {
            font-size   : 22px;
            font-weight : 600;
            text-align  : center;

            @media(max-width: 576px) {
                font-size : 18px;
            }
        }

        .subtitle {
            color      : var(--text-light);
            font-size  : 14px;
            text-align : center;
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
        font-size        : 18px;
        line-height      : 18px;
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