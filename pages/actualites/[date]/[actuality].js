import React from "react";
import useSWR from 'swr'
import styled from "styled-components";
import { getActualitiesPaths, getActuality } from "api/actuality";
import { fetchSiteDatas } from "api/site";
import Layout from "layouts/Layout";
import ActualityLayout from "layouts/Actuality";
import NextBreadcrumbs from "tools/Breadcrumb";
import { dateParser, fetcher } from "functions/utils";
import { Billboard, Cards, Carousel, Checkerboard, Content, Embed, Gallery, Img, MainImage } from "components/global";

export default function Actuality({ datas, router, actu }) {
    const { date, actuality } = router.query;
    const { data: siteDatas } = useSWR(process.env.SITE_API_ROUTE, fetcher, { initialData: datas })
    const { data: actuDatas } = useSWR(`${process.env.ACTUALITY_API_ROUTE}?date=${date}&title=${actuality}`, fetcher, { initialData: actu })

    return (
        siteDatas && actuDatas && (
            <Layout
                datas={siteDatas}
                title={actuDatas.title}
                headerImg={(actuDatas.image?.url && actuDatas.imagedisplay) && actuDatas.image?.url}
            >
                <ActualityLayout datas={siteDatas}>
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

    return {
        props: {
            actu: data,
            datas: siteDatas
        },
        revalidate: 1
    }
}

/**
 * 
 */

const ActualityContainer = styled.div`
    max-width     : 1170px;
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

    .actu-inner-container {
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