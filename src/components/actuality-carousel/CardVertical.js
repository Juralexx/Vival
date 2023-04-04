import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Icon from 'icons/Icon'
import { dateParser } from 'functions/utils'

const getContentToDisplay = (actu) => {
    if (actu.content) {
        return actu.content
    } else {
        if (actu.components.length > 0) {
            const el = actu.components.find(el => el.content)
            return el.content ? el.content : ""
        }
    }
}

const CardVertical = ({ actuality, className }) => {
    return (
        <Card className={className}>
            <div className="image">
                <img
                    src={actuality?.image.url ? `${process.env.SERVER_URL}${actuality?.image.url}` : '/img/actualites-default.jpg'}
                    alt={actuality?.title}
                    title={actuality?.title}
                />
            </div>
            <div className="content">
                <h3>
                    <Link href={`/actualites/${actuality?.url}`}>
                        {actuality?.title}
                    </Link>
                </h3>
                <p className="date">
                    {dateParser(actuality?.date)}
                </p>
                <div
                    className="text"
                    dangerouslySetInnerHTML={{ __html: getContentToDisplay(actuality) }}
                />
                <div className='btn-container'>
                    <Link href={`/actualites/${actuality?.url}`} className="more" passHref>
                        Lire la suite <Icon name="DoubleArrowRight" />
                    </Link>
                </div>
            </div>
        </Card>
    )
}

export default CardVertical

const Card = styled.div`
    height        : 100%;
    margin        : 0 auto;
    border-radius : var(--rounded-md);
    box-shadow    : var(--shadow-smooth);
    overflow      : hidden;

    .image {
        position   : relative;
        max-height : 200px;
        width      : 100%;

        img {
            object-fit : cover;
            max-height : 200px;
            width      : 100%;
        }
    }

    .content {
        padding : 20px;
        height  : calc(100% - 200px);

        .date {
            margin-bottom : 15px;
            color         : var(--text-light);
            font-size     : 14px;
        }
        .text {
            text-overflow      : ellipsis;
            overflow           : hidden;
            width              : 100%;
            line-height        : 1.4rem;
            display            : -webkit-box;
            -webkit-line-clamp : 6;
            -webkit-box-orient : vertical;
            margin-bottom      : 20px;

            *:not(p, span, a, strong, b, u) {
                display : none;
            }
        }
    }

    .btn-container {
        position        : absolute;
        bottom          : 20px;
        right           : 20px;
        justify-content : flex-end;

        @media(max-width: 992px) {
            position : relative;
            bottom   : 0;
        }
    }
`