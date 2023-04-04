import React from 'react'
import useSWR from 'swr'
import { fetcher } from 'functions/utils'
import styled from 'styled-components'
import Layout from 'layouts/Layout'
import { fetchSiteDatas, getImages } from 'api/site'
import { getService, getServicesPaths } from 'api/services'
import NextBreadcrumbs from 'tools/Breadcrumb'
import ServiceLayout from 'layouts/Service'
import { Billboard, Cards, Carousel, Checkerboard, Content, Embed, Gallery, Img, MainImage } from 'components/global'

export default function Services({ content, datas, router, brands, partners }) {
    const { service } = router.query
    const { data: siteDatas } = useSWR(process.env.SITE_API_ROUTE, fetcher, { initialData: datas })
    const { data: pageDatas } = useSWR(`${process.env.SERVICE_API_ROUTE}?url=/${service}`, fetcher, { initialData: content })

    return (
        siteDatas && pageDatas && (
            <Layout
                datas={siteDatas}
                title={pageDatas.title}
                headerImg={(pageDatas.image?.url && pageDatas.imagedisplay) && pageDatas.image?.url}
            >
                <ServiceLayout
                    datas={siteDatas}
                    brands={brands}
                    partners={partners}
                >
                    <ServiceContainer className="container">
                        <NextBreadcrumbs
                            denomination={siteDatas.denomination}
                        />
                        <div className="title">
                            <h1>{pageDatas.title}</h1>
                        </div>
                        <div className="service-inner-container">
                            {pageDatas.image &&
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
                                                    cards={component.cards}
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
    max-width     : 1170px;
    padding-top   : 30px;
    margin-bottom : 50px;

    + * {
        clear   : both;
    }

    @media(max-width: 1200px) {
        width : 90%;
    }
    @media(max-width: 576px) {
        width : 100%;
    }

    ul {
        display : inline-block;
        li {
            list-style : disc;
        }
    }

    img {
        border-radius : var(--rounded-md);
        cursor        : pointer;
    }

    .service-inner-container {
        padding  : 50px 0 40px;
        overflow : hidden;
    }

    .title {
        h1 {
            margin : 0;
        }

        .date {
            color      : var(--text);
            text-align : center;
        }
    }

    p {
        text-align : justify;
    }

    @media(max-width: 768px) {
        .service-inner-container {
            display        : flex;
            flex-direction : column;
        }

        .service-txt {
            margin     : 0 auto;
            text-align : justify;
        }
    }
`