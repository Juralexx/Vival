import React from "react";
import useSWR from 'swr'
import styled, { css } from "styled-components";
import { getActualitiesPaths, getActuality } from "api/actuality";
import { fetchSiteDatas, getImages } from "api/site";
import Layout from "layouts/Layout";
import ActualityLayout from "layouts/Actuality";
import { Breadcrumb } from 'components/global';
import { dateParser, fetcher } from "functions/utils";
import { Billboard, Cards, Carousel, Checkerboard, Content, Embed, Gallery, Img, MainImage } from "components/shared";

export async function getStaticPaths() {
    const { paths } = await getActualitiesPaths()
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    //Get url params
    const { date, actuality } = params;
    //Fetch requested actuality from date and title
    const { data } = await getActuality({ date: date, title: actuality });
    //Fetch site datas
    const { siteDatas } = await fetchSiteDatas();
    //Fetch all brands images
    const { files: brands } = await getImages({ folder: 'img/brands' });
    //Fetch all partners images
    const { files: partners } = await getImages({ folder: 'img/partners' });

    return {
        props: {
            actu: data,
            datas: siteDatas,
            brands,
            partners
        },
        revalidate: 1
    }
}

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
                    <ActualityContainer className="container-lg pt-4 mb-12 overflow-hidden" imageSide={actuDatas.image_side}>
                        <Breadcrumb
                            denomination={siteDatas.denomination}
                        />
                        <h1 className="m-0">
                            {actuDatas.title}
                        </h1>
                        <div className="color-text-light text-center">
                            {dateParser(actuDatas.date)}
                        </div>
                        <div className="pt-12 pb-10 overflow-hidden md:flex md:flex-col">
                            <div className="overflow-hidden md:flex md:flex-col">
                                {actuDatas.image && actuDatas.image_display !== 'Bas' &&
                                    <MainImage
                                        datas={siteDatas}
                                        page={actuDatas}
                                    />
                                }
                                {actuDatas.content &&
                                    <div
                                        className="service-txt ck-content"
                                        dangerouslySetInnerHTML={{ __html: actuDatas.content }}
                                    />
                                }
                                {actuDatas.image && actuDatas.image_display === 'Bas' &&
                                    <MainImage
                                        datas={siteDatas}
                                        page={actuDatas}
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

const ActualityContainer = styled.div`
    max-width : 1200px;

    + * {
        clear   : both;
    }

    ul {
        li {
            vertical-align : middle;
            &::before {
                content      : "●"; //➤
                font-size    : 14px;
                color        : var(--primary);
                display      : inline-block;
                margin-right : 7px;
                margin-left  : 12px;
                margin-top   : 0px;

                @media(max-width: 992px) {
                    margin-left : 0;
                }
            }
        }
    }

    img {
        border-radius : var(--rounded-lg);
        cursor        : pointer;
    }

    p {
        text-align : justify;
    }

    @media(max-width: 992px) {
        .actu-txt {
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