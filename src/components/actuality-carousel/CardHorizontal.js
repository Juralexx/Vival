import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Icon from 'icons/Icon'
import { dateParser } from 'functions/utils'

const CardHorizontal = ({ actuality, className }) => {
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
                <p className="date">{dateParser(actuality?.date)}</p>
                <div
                    className="text"
                    dangerouslySetInnerHTML={{ __html: actuality?.content }}
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

export default CardHorizontal

const Card = styled.div`
    display       : grid;
    margin        : 0 auto;
    min-height    : 229px;
    border-radius : var(--rounded-3xl);
    box-shadow    : var(--shadow-colored);
    border        : 1px solid var(--light-border);
    overflow      : hidden;

    .image {
        padding    : 0;
        order      : 1;
        max-height : 238px;
        img {
            object-fit    : cover;
            height        : 100%;
            width         : 100%;
        }
    }

    .content {
        order   : 2;
        padding : 20px;
        .date {
            margin-bottom : 13px;
            color         : var(--text-light);
            font-size     : 14px;
        }
        .text {
            text-overflow      : ellipsis;
            overflow           : hidden;
            width              : 100%;
            line-height        : 1.4;
            display            : -webkit-box;
            -webkit-line-clamp : 4;
            -webkit-box-orient : vertical;
            margin-bottom      : 15px;

            *:not(p, span, a, strong, b, u) {
                display : none;
            }
        }
    }

    &.__to-left {
        grid-template-columns : 3fr 1fr;

        h3, .date, .text {
            text-align: right;
        }
        .image {
            order : 2;
        }
        .content {
            order : 1;
        }
        .btn-container {
            justify-content : flex-end;
        }
    }

    &.__to-right {
        grid-template-columns : 1fr 3fr;
    }

    @media(max-width: 1200px) {
        &.__to-left {
            grid-template-columns : 2fr 1fr;
        }
        &.__to-right {
            grid-template-columns : 1fr 2fr;
        }
    }

    @media(max-width:576px) {
        &.__to-left {
            grid-template-columns : 1fr;
            .image {
                order : 1;
            }
            .text {
                order : 2;
            }
            h3, .date, .text {
                text-align: left;
            }
        }
        &.__to-right {
            grid-template-columns : 1fr;
            .btn-container {
                justify-content : flex-end;
            }
        }
        .image {
            max-height : 200px;
        }
    }
`