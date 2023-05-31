import React from 'react'
import useSWR from 'swr'
import { fetcher } from 'functions/utils'
import styled, { css } from 'styled-components'
import Layout from 'layouts/Layout'
import ServiceLayout from 'layouts/Service'
import { fetchSiteDatas, getImages } from 'api/site'
import { getService, getServicesPaths } from 'api/services'
import { Billboard, Cards, Carousel, Checkerboard, Content, Embed, Gallery, Img, MainImage } from 'components/shared'
import { Breadcrumb } from 'components/global';

export default function Services({ content, datas, router, brands, partners }) {
    const { service } = router.query
    const { data: siteDatas } = useSWR(process.env.SITE_API_ROUTE, fetcher, { initialData: datas })
    const { data: pageDatas } = useSWR(`${process.env.SERVICE_API_ROUTE}?url=/${service}`, fetcher, { initialData: content })

    return (
        siteDatas && pageDatas && (
            <Layout
                datas={siteDatas}
                title={pageDatas.title}
            >
                <ServiceLayout
                    datas={siteDatas}
                    brands={brands}
                    partners={partners}
                >
                    <ServiceContainer className="container-lg pt-4 mb-12" imageSide={pageDatas.image_side}>
                        <Breadcrumb
                            denomination={siteDatas.denomination}
                        />
                        <h1>
                            {pageDatas.title}
                        </h1>
                        <div className="pt-12 pb-10 overflow-hidden md:flex md:flex-col">
                            <div className="overflow-hidden md:flex md:flex-col">
                                {pageDatas.image && pageDatas.image_display !== 'Bas' &&
                                    <MainImage
                                        datas={siteDatas}
                                        page={pageDatas}
                                    />
                                }
                                {pageDatas.content &&
                                    <div
                                        className="service-txt ck-content"
                                        dangerouslySetInnerHTML={{ __html: pageDatas.content }}
                                    />
                                }
                                {pageDatas.image && pageDatas.image_display === 'Bas' &&
                                    <MainImage
                                        datas={siteDatas}
                                        page={pageDatas}
                                    />
                                }
                            </div>

                            {pageDatas?.components?.length > 0 && (
                                pageDatas.components.map((component, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            {component.__component === 'general.galerie' &&
                                                <Gallery
                                                    datas={siteDatas}
                                                    page={pageDatas}
                                                    gallery={component}
                                                />
                                            }
                                            {component.__component === 'general.damier' &&
                                                <Checkerboard
                                                    datas={siteDatas}
                                                    checkerboard={component}
                                                />
                                            }
                                            {component.__component === 'general.contenu' &&
                                                <Content
                                                    content={component}
                                                />
                                            }
                                            {component.__component === 'general.groupe-de-cartes' &&
                                                <Cards
                                                    component={component}
                                                />
                                            }
                                            {component.__component === 'general.image' &&
                                                <Img
                                                    datas={siteDatas}
                                                    page={pageDatas}
                                                    image={component}
                                                />
                                            }
                                            {component.__component === 'general.tableau-d-affichage' &&
                                                <Billboard
                                                    datas={siteDatas}
                                                    page={pageDatas}
                                                    billboard={component}
                                                />
                                            }
                                            {component.__component === 'general.carrousel-d-images' &&
                                                <Carousel
                                                    datas={siteDatas}
                                                    page={pageDatas}
                                                    carousel={component}
                                                />
                                            }
                                            {component.__component === 'medias.integration' &&
                                                <Embed
                                                    embed={component}
                                                />
                                            }
                                        </React.Fragment>
                                    )
                                })
                            )}
                        </div>
                    </ServiceContainer>
                </ServiceLayout>
            </Layout>
        )
    )
}

export const getStaticPaths = async () => {
    const { paths } = await getServicesPaths()
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const { service } = params
    const { data } = await getService({ url: service })
    const { siteDatas } = await fetchSiteDatas()
    const { files: brands } = await getImages({ folder: 'img/brands' })
    const { files: partners } = await getImages({ folder: 'img/partners' })

    return {
        props: {
            content: data,
            datas: siteDatas,
            brands: brands,
            partners: partners
        },
        revalidate: 1
    }
}

/**
 * 
 */

const ServiceContainer = styled.div`
    max-width : 1200px;

    + * {
        clear : both;
    }

    ul {
        li {
            vertical-align : middle;
            &::before {
                content       : "◉";
                font-size     : 16px;
                color         : var(--primary-light);
                display       : inline-block;
                margin-left   : -1em;
                margin-right  : 10px;
            }
        }

        @media(max-width: 576px) {
            margin-left : 20px !important;
        }
    }

    img {
        border-radius : var(--rounded-md);
        cursor        : pointer;
    }

    .service-txt {
        > p {
            text-align : justify;
        }
    }

    @media(max-width: 992px) {
        .service-txt {
            margin : 0 auto;
            ${props => (props.imageSide === 'Droite' || props.imageSide === 'Gauche') && css`
                order : 1;
            `};
        }

        .main-img {
            ${props => (props.imageSide === 'Droite' || props.imageSide === 'Gauche') && css`
                order : 2;
            `};
        }
    }
`