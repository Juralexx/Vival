import React from "react";
import useSWR from 'swr'
import styled from "styled-components";
import { getActualitiesPaths, getActuality } from "api/actuality";
import { fetchSiteDatas, getImages } from "api/site";
import Layout from "layouts/Layout";
import ActualityLayout from "layouts/Actuality";
import NextBreadcrumbs from "tools/Breadcrumb";
import { dateParser, fetcher } from "functions/utils";
import { Billboard, Cards, Carousel, Checkerboard, Content, Embed, Gallery, Img, MainImage } from "components/global";

export default function Actuality({ datas, router, actu, brands, partners }) {
    const { date, actuality } = router.query;
    const { data: siteDatas } = useSWR(process.env.SITE_API_ROUTE, fetcher, { initialData: datas })
    const { data: actuDatas } = useSWR(`${process.env.ACTUALITY_API_ROUTE}?date=${date}&title=${actuality}`, fetcher, { initialData: actu })

    return (
        siteDatas && actuDatas && (
            <Layout
                datas={siteDatas}
                title={actuDatas.title}
            // headerImg={(actuDatas.image?.url && actuDatas.image_display) && actuDatas.image?.url}
            >
                <ActualityLayout
                    datas={siteDatas}
                    brands={brands}
                    partners={partners}
                >
                    <ActualityContainer className="container">
                        <NextBreadcrumbs
                            denomination={siteDatas.denomination}
                        />
                        <div className="title">
                            <h1>{actuDatas.title}</h1>
                            <div className="date">
                                {dateParser(actuDatas.date)}
                            </div>
                        </div>
                        <div className="actu-inner-container">
                            <div className="actu-inner">
                                {actuDatas.image &&
                                    <MainImage
                                        datas={siteDatas}
                                        page={actuDatas}
                                    />
                                }
                                {actuDatas.content &&
                                    <div
                                        className="actu-txt ck-content"
                                        dangerouslySetInnerHTML={{ __html: actuDatas.content }}
                                    />
                                }
                            </div>

                            {actuDatas?.components?.length > 0 && (
                                actuDatas.components.map((component, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            {component.__component === 'general.galerie' &&
                                                <Gallery
                                                    datas={siteDatas}
                                                    page={actuDatas}
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
                                                    page={actuDatas}
                                                    image={component}
                                                />
                                            }
                                            {component.__component === 'general.tableau-d-affichage' &&
                                                <Billboard
                                                    datas={siteDatas}
                                                    page={actuDatas}
                                                    billboard={component}
                                                />
                                            }
                                            {component.__component === 'general.carrousel-d-images' &&
                                                <Carousel
                                                    datas={siteDatas}
                                                    page={actuDatas}
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
                    </ActualityContainer>
                </ActualityLayout>
            </Layout>
        )
    )
}

export const getStaticPaths = async () => {
    const { paths } = await getActualitiesPaths()
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const { date, actuality } = params
    const { data } = await getActuality({ date: date, title: actuality })
    const { siteDatas } = await fetchSiteDatas()
    const { files: brands } = await getImages({ folder: 'img/brands' })
    const { files: partners } = await getImages({ folder: 'img/partners' })

    return {
        props: {
            actu: data,
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

const ActualityContainer = styled.div`
    max-width     : 1170px;
    padding-top   : 15px;
    margin-bottom : 100px;
    overflow      : hidden;

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
            &::before {
                content       : "➜"; //➤
                font-size     : 14px;
                color         : var(--primary);
                display       : inline-block;
                margin-left   : -1em;
                margin-right  : 7px;
                margin-bottom : 2px;
            }
        }
    }

    img {
        border-radius : var(--rounded-md);
        cursor        : pointer;
    }

    .actu-inner-container {
        padding : 50px 0 40px;
    }

    .actu-inner {
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
        .actu-inner-container {
            display        : flex;
            flex-direction : column;
        }

        .actu-txt {
            margin     : 0 auto;
            text-align : justify;
        }
    }
`