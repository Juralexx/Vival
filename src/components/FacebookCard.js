import React from 'react'
import Icon from 'icons/Icon'

export default function FacebookCard({ datas }) {
    return (
        <div className='relative w-[330px] bg-body rounded-lg bordered m-auto overflow-hidden'>
            <a
                href={"https://www.facebook.com/" + datas.facebook}
                target="_blank"
                rel="noreferrer"
                className='block h-full w-full primary pt-4 pb-3 pr-3 pl-[98px] text-2xl tracking-wide leading-6'
            >
                <Icon name="FacebookCircle" className="absolute -left-5 -top-5 w-24 h-24 primary" />
                Suivez-nous sur<br /> <span className='font-extrabold uppercase text-3xl tracking-wider leading-8'>Facebook</span>
            </a>
        </div>
    )
}