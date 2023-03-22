import React from "react";
import useSWR from 'swr'
import { fetcher } from "functions/utils";
import dynamic from 'next/dynamic'
import styled from "styled-components";
import { fetchSiteDatas } from "api/site";
import Layout from "layouts/Layout";
import NextBreadcrumbs from "tools/Breadcrumb";
import Icon from "icons/Icon";
import FacebookCard from "components/FacebookCard";

const LeafletMap = dynamic(() => import('components/map/LeafletMap'), { ssr: false })

export default function Contact({ datas }) {
    const { data } = useSWR(process.env.SITE_API_ROUTE, fetcher, { initialData: datas })
    const title = 'Contact'

    return (
        data && (
            <Layout
                datas={data}
                title={title}
            >
                <NextBreadcrumbs
                    denomination={data.denomination}
                />
                <h1>{title}</h1>
                <ContactContainer id="contact-page">
                    <div className="__grid">
                        <div className="infos-container">
                            <div className="infos">
                                <p>
                                    <strong>{data.denomination}</strong>, votre <strong className="lowercase">{data.job}</strong> à&nbsp;<strong>{data.city}</strong> répond à vos besoins.
                                    Pour toute demande d'informations, contactez-nous.
                                </p>
                            </div>
                            <div className="infos linked">
                                <a href={data.googlemap} target="_blank" rel="noreferrer">
                                    <Icon name="Map" />{data.street}<br />{data.postcode} {data.city}
                                </a>
                            </div>
                            <div className="infos linked">
                                <a href={"tel:" + data.phone}>
                                    <Icon name="Phone" />{data.phone}
                                </a>
                            </div>
                            <div className="infos linked">
                                <Icon name="Clock" />
                                {data.opening.map((el, key) => {
                                    return (
                                        <p key={key}>
                                            <span className="font-bold">{el.day ? el.day : ''} : </span>{el.range ? el.range : ''}
                                        </p>
                                    )
                                })}
                            </div>
                            <div className="socials-infos">
                                <FacebookCard datas={datas} />
                            </div>
                        </div>
                        <div className="contact-map">
                            <LeafletMap datas={data} />
                        </div>
                    </div>
                </ContactContainer>
            </Layout>
        )
    )
}

export async function getStaticProps() {
    const { siteDatas } = await fetchSiteDatas()
    return {
        props: {
            datas: siteDatas
        },
    };
}

const ContactContainer = styled.div`
    position : relative;
    width    : 100%;
    padding  : 50px 0 150px;
    margin   : 0 auto;
    max-width : 1700px;

    .__grid {
        display               : grid;
        grid-template-columns : 1fr 2fr;
        max-width             : 1700px;

        @media(max-width: 992px) {
            grid-template-columns : 1fr;
        }
    }

    .infos-container {
        display        : flex;
        flex-direction : column;
        padding        : 0 50px;

        @media(max-width: 992px) {
            max-width : 400px;
            margin    : 0 auto 70px;
        }

        .infos {
            position       : relative;
            display        : flex;
            flex-direction : column;
            align-items    : flex-start;
            margin         : 10px 0;

            &.linked {
                margin-left : 25px;
            }

            svg {
                position     : absolute;
                top          : 4px;
                left         : -25px;
                height       : 15px;
                width        : 15px;
                margin-right : 5px;
                color        : var(--text-xlight);
            }
        }

        .socials-infos {
            div {
                margin : 20px 0;
            }
        }
    
        p {
            position   : relative;
            text-align : left;
        }
    }

    .contact-map {
        border-radius : var(--rounded-md);
        padding       : 0;
        box-shadow: inset var(--shadow-smooth);
        .leaflet-container {
            height        : 600px;
            border-radius : var(--rounded-md);
        }
    }

    @media(max-width: 992px) {
        padding : 0;
        .infos-container {
            padding : 0 15px;
        }
    }
`