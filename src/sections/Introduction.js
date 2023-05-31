import Image from 'next/image'
import React from 'react'
import { Revealer } from 'tools/Revealer'

export default function Introduction({ datas, introduction }) {
    return (
        <div className='av-introduction' id="introduction">
            <div className="av-introduction-container">
                <Revealer className="av-introduction-image">
                    <img
                        className='av-introduction-logo'
                        src="/././img/logo.png"
                        alt={`${datas.denomination} - ${datas.slogan} à ${datas.city}`}
                        title={`${datas.denomination} - ${datas.slogan} à ${datas.city}`}
                    />
                    <Image
                        className='av-introduction-main-image'
                        src='/img/hero-header.jpg'
                        alt='Vival Meillonnas'
                        width={500}
                        height={370}
                        priority={true}
                    />
                </Revealer>
                <Revealer delay={300} className="av-introduction-text">
                    <h1>{introduction?.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: introduction?.content }}></div>
                </Revealer>
            </div>
        </div>
    )
}