import React from 'react';
import useSWR from 'swr';
import { fetcher } from 'functions/utils';
import Bricks from 'sections/Bricks';
import CheckerboardsTop from 'sections/CheckerboardsTop';
import CheckerboardBottom from 'sections/CheckerboardBottom';
import Introduction from 'sections/Introduction';
import Images from 'sections/Images';
import Numbers from 'sections/Numbers';
import Delivery from 'sections/Delivery';
import Parallax from 'sections/Parallax';
import Informations from 'sections/Informations';
import ActualityCarousel from 'sections/actuality-carousel/ActualityCarousel';
import Contact from 'sections/Contact';
import Layout from 'layouts/Layout';
import { getHome } from 'api/home';
import { getActualities } from 'api/actuality';
import { fetchSiteDatas, getImages } from 'api/site';

export async function getStaticProps() {
    //Fetch site datas : denomination, openings, phone, address...
    const { siteDatas } = await fetchSiteDatas();
    //Fetch home datas : Bricks, introduction, checkerboards and delivery
    const { home } = await getHome();
    //Fetch actualities
    const { actualities } = await getActualities();
    //Fetch all images from the 'brands' folder
    const { files: brands } = await getImages({ folder: 'img/brands' });
    //Fetch all images from the 'partners' folder
    const { files: partners } = await getImages({ folder: 'img/partners' });

    return {
        props: {
            datas: siteDatas,
            home,
            actualities,
            brands,
            partners
        },
    };
}

export default function Home({ datas, home, actualities, brands, partners }) {
    //Check if site datas are up-to-date
    const { data: siteDatas } = useSWR(process.env.SITE_API_ROUTE, fetcher, { initialData: datas });
    //Check if home datas are up-to-date
    const { data: homeDatas } = useSWR(process.env.HOME_API_ROUTE, fetcher, { initialData: home });
    //Check if actualities datas are up-to-date
    const { data: actuDatas } = useSWR(`${process.env.ACTUALITIES_API_ROUTE}`, fetcher, { initialData: actualities });

    return (
        (siteDatas && homeDatas && actuDatas?.data) && (
            <Layout
                datas={siteDatas}
            >
                <Bricks
                    datas={homeDatas}
                />
                <Introduction
                    datas={siteDatas}
                    introduction={home.introduction}
                />
                <CheckerboardsTop
                    checkerboards={homeDatas.checkerboards.slice(0, 4)}
                />
                {homeDatas.delivery &&
                    <Delivery
                        datas={homeDatas.delivery}
                    />
                }
                {actuDatas.data &&
                    <ActualityCarousel
                        actualities={actuDatas.data.sort((a, b) => {
                            return new Date(b.date) - new Date(a.date);
                        }).slice(0, 6)}
                    />
                }
                <Informations
                    datas={siteDatas}
                />
                <Parallax
                    datas={homeDatas}
                />
                <Numbers
                    datas={siteDatas}
                />
                {homeDatas.checkerboards.length > 3 &&
                    <CheckerboardBottom
                        checkerboards={homeDatas.checkerboards.slice(4, home.checkerboards.length)}
                    />
                }
                <Images
                    title="Nos Partenaires"
                    images={partners}
                />
                <Images
                    title="Nos Marques"
                    images={brands}
                />
                <Contact
                    datas={siteDatas}
                />
            </Layout>
        )
    )
}