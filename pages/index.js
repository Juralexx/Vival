import React from 'react'
import useSWR from 'swr'
import { fetcher } from 'functions/utils'
import Bricks from 'components/Bricks'
import CheckerboardsTop from 'components/CheckerboardsTop'
import Intro from 'components/Intro'
import Checkerboard from 'components/Checkerboard'
import Images from 'components/Images'
import Numbers from 'components/Numbers'
import Delivery from 'components/Delivery'
import Parallax from 'components/Parallax'
import Informations from 'components/Informations'
import ActualityCarousel from 'components/actuality-carousel/ActualityCarousel'
import Contact from 'components/Contact'
import Layout from 'layouts/Layout'
import { getHome } from 'api/home'
import { getActualities } from 'api/actuality'
import { fetchSiteDatas, getImages } from 'api/site'

export default function Home({ datas, home, actualities, brands, partners }) {
    const { data: siteDatas } = useSWR(process.env.SITE_API_ROUTE, fetcher, { initialData: datas })
    const { data: homeDatas } = useSWR(process.env.HOME_API_ROUTE, fetcher, { initialData: home })
    const { data: actuDatas } = useSWR(`${process.env.ACTUALITIES_API_ROUTE}`, fetcher, { initialData: actualities })

    return (
        siteDatas &&
        homeDatas &&
        actuDatas?.data && (
            <Layout
                datas={siteDatas}
            >
                <Bricks
                    datas={homeDatas}
                />
                <Intro
                    datas={siteDatas}
                    introduction={home.introduction}
                />
                <CheckerboardsTop
                    checkerboards={homeDatas.checkerboards.slice(0, 4)}
                />
                <Delivery />
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
                    <Checkerboard
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

export async function getStaticProps() {
    const { siteDatas } = await fetchSiteDatas()
    const { home } = await getHome()
    const { actualities } = await getActualities()
    const { files: brands } = await getImages({ folder: 'img/brands' })
    const { files: partners } = await getImages({ folder: 'img/partners' })

    return {
        props: {
            datas: siteDatas,
            home: home,
            actualities: actualities,
            brands: brands,
            partners: partners
        },
    };
}