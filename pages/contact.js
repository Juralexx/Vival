import React from "react";
import Head from "next/head";
import dynamic from 'next/dynamic'
import HeaderSlim from "../src/components/HeaderSlim";
import NextBreadcrumbs from "../src/tools/Breadcrumb";
import { FaFacebook } from 'react-icons/fa'
import { BsTelephoneFill, BsFillClockFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'

const LeafletMap = dynamic(() => import('../src/components/LeafletMap'), { ssr: false })

export default function Contact({ datas }) {
    const title = 'Contact'

    return (
        <>
            <Head>
                <title>{`${datas.denomination} - ${title}`}</title>
                <meta name="description" content={title} />
                <meta id="og-title" property="og:title" content={title + ' - ' + datas.denomination} key="title" />
                <meta id="og-image" property="og:image" content={datas.image} key="image" />
                <meta id="og-image-secure_url" property="og:image:secure_url" content={datas.image} />
                <meta id="og-description" property="og:description" content={title} />
            </Head>

            <HeaderSlim />

            <NextBreadcrumbs denomination={datas.denomination} />
            <h1>{title}</h1>
            <div className="contact-page" id="contact-page">
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0 col-xl-4 infos-container">
                        <div className="infos">
                            <p className="text-justify"><strong>{datas.denomination}</strong>, votre <strong className="lowercase">{datas.slogan}</strong> à&nbsp;<strong>{datas.city}</strong> répond à vos besoins.
                                Pour toute demande d'informations, contactez-nous.</p>
                        </div>
                        <div className="infos">
                            <a href={datas.googlemap} target="_blank" className="contact-link"><FaMapMarkerAlt className="contact-link-svg" />{datas.street}<br />{datas.postcode} {datas.city}</a>
                            <a href={"tel:" + datas.phone} className="contact-link"><BsTelephoneFill className="contact-link-svg" />{datas.phone}</a>
                        </div>
                        <div className="infos hours">
                            <BsFillClockFill className="contact-link-svg" />
                            <div>
                                {datas.opening.map((el, key) => {
                                    return (
                                        <p className="text-center" key={key}>
                                            <span className="font-bold">{el.day ? el.day : ''} : </span>{el.hours ? el.hours : ''}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="infos">
                            <div className="socials-barre !justify-start">
                                <a href={"https://www.facebook.com/" + datas.facebook} target="_blank"><FaFacebook /></a>
                                <a href={"https://www.facebook.com/" + datas.facebook} target="_blank">Suivez-nous sur<br /> <span>Facebook</span> !</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-8 contact-map">
                        <LeafletMap datas={datas} />
                    </div>
                </div>
            </div>
        </>
    )
}