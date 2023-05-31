import React from 'react'
import Link from 'next/link'
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

const CardHorizontal = ({ actuality, className }) => {
    return (
        <div className={className ? `av-actuality-horizontal-card ${className}` : 'av-actuality-horizontal-card'}>
            <div className="av-actuality-horizontal-card-image">
                <img
                    src={actuality?.image.url ? `${process.env.SERVER_URL}${actuality?.image.url}` : '/img/actualites-default.jpg'}
                    alt={actuality?.title}
                    title={actuality?.title}
                />
            </div>
            <div className="av-actuality-horizontal-card-content">
                <h3>
                    <Link href={`/actualites/${actuality?.url}`}>
                        {actuality?.title}
                    </Link>
                </h3>
                <p className="av-actuality-horizontal-card-date">{dateParser(actuality?.date)}</p>
                <div
                    className="av-actuality-horizontal-card-text"
                    dangerouslySetInnerHTML={{ __html: getContentToDisplay(actuality) }}
                />
                <div className='av-actuality-horizontal-card-btn-container'>
                    <Link href={`/actualites/${actuality?.url}`} className="more" passHref>
                        Lire la suite <Icon name="DoubleArrowRight" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardHorizontal;