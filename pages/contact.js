import React from "react";
import useSWR from 'swr'
import { fetcher } from "functions/utils";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { fetchSiteDatas } from "api/site";
import Layout from "layouts/Layout";
import NextBreadcrumbs from "tools/Breadcrumb";
import Form from "components/Form";

const LeafletMap = dynamic(() => import('components/LeafletMap'), { ssr: false })

export default function Contact({ datas }) {
    const { data } = useSWR(process.env.SITE_API_ROUTE, fetcher, { initialData: datas })
    const title = 'Contactez-nous'

    return (
        data && (
            <Layout datas={data} title={title}>
                <ContactContainer id="contact-page">
                    <div className="__grid">
                        <div className="form-container">
                            <FormContainer id='form'>
                                <h1>{title}</h1>
                                <NextBreadcrumbs
                                    denomination={data.denomination}
                                />
                                <p>Pour tous renseignements complémentaires concernant <strong>{data.denomination}</strong>, votre <strong className="lowercase">{data.job}</strong> à&nbsp;<strong>{data.city}</strong>, contactez-nous.</p>
                                <p className="small"><small><strong>Protection de vos données :</strong> les informations que vous nous communiquez sont confidentielles. Nous nous engageons à ne jamais les diffuser ni à les transmettre à des tiers.</small></p>
                                <Form />
                            </FormContainer>
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
    position  : relative;
    width     : 100%;
    padding   : 0;
    max-width : 1920px;
    margin    : 0 auto;

    h1 {
        text-align    : left;
        margin-bottom : 0;
    }
    .small {
        line-height : 1.1;
    }

    .__grid {
        display               : grid;
        grid-template-columns : 1fr 1fr;

        @media(max-width: 992px) {
            grid-template-columns : 1fr;
        }
    }

    .form-container {
        position : relative;
        height   : 100%;
        padding  : 100px;
        z-index  : 2;

        @media(max-width: 1366px) {
            padding  : 100px 50px;
        }
        @media(max-width: 1200px) {
            padding  : 50px 30px;
        }
        @media(max-width: 768px) {
            padding : 50px 15px;
        }
    }

    .contact-map {
        position   : relative;
        padding    : 100px 0;
        height     : 100%;
        z-index    : 0;
        .leaflet-map,
        .leaflet-container {
            height     : 100%;
            box-shadow : var(--shadow-smooth);
        }
        @media(max-width: 1366px) {
            padding  : 100px 50px;
        }
        @media(max-width: 1200px) {
            padding  : 50px 30px;
        }
        @media(max-width: 992px) {
            height : 600px;
        }
        @media(min-width:577px) and (max-width: 992px) {
            margin-top : -150px;
        }
        @media(max-width: 768px) {
            padding : 50px 15px;
        }
    }
`

const FormContainer = styled.div`
    position         : relative;
    width            : 100%;
    background-color : var(--body);

    @media(min-width:577px) and (max-width: 992px) {
        width         : 90%;
        margin        : 0 auto;
        padding       : 20px 30px;
        border-radius : var(--rounded-md);
        box-shadow    : var(--shadow-bottom);
    }

    .breadcrumb {
        display      : inline-block;
        margin-right : auto;
        padding-top  : 0;
    }

    .btn__container {
        justify-content : center;
    }

    .dynamic-input,
    .textarea {
        background-color : var(--green);
        label {
            background-color : var(--green);
        }
    }
`