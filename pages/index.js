import React from 'react'
import useSWR from 'swr'
import { fetcher } from 'functions/utils'
import Bricks from 'components/Bricks'
import CheckerboardModern from 'components/checkerboards/CheckerboardModern'
import Intro from 'components/Intro'
import Checkerboard from 'components/checkerboards/Checkerboard'
import Brands from 'components/Brands'
import Numbers from 'components/Numbers'
import Parallax from 'components/Parallax'
import ContactBar from 'components/ContactBar'
import Map from 'components/map/Map'
import ActualityCarousel from 'components/actuality-carousel/ActualityCarousel'
import Layout from 'layouts/Layout'
import { fetchSiteDatas } from 'api/site'
import { getActualities } from 'api/actuality'
import { getHome } from 'api/home'

export default function Home({ datas, home, actualities }) {
    const { data: siteDatas } = useSWR(process.env.SITE_API_ROUTE, fetcher, { initialData: datas })
    const { data: homeDatas } = useSWR(process.env.HOME_API_ROUTE, fetcher, { initialData: home })
    const { data: actuDatas } = useSWR(`${process.env.ACTUALITIES_API_ROUTE}`, fetcher, { initialData: actualities })

    return (
        siteDatas &&
        homeDatas &&
        actuDatas?.data && (
            <Layout datas={siteDatas}>
                <Bricks
                    datas={homeDatas}
                />
                <Intro
                    datas={siteDatas}
                    introduction={home.introduction}
                />
                <CheckerboardModern
                    checkerboards={homeDatas.checkerboards.slice(0, 3)}
                />
                {actuDatas.data &&
                    <ActualityCarousel
                        actualities={actuDatas.data.sort((a, b) => {
                            return new Date(b.date) - new Date(a.date);
                        }).slice(0, 6)}
                    />
                }
                <ContactBar
                    datas={siteDatas}
                />
                <Parallax
                    datas={homeDatas}
                />
                <Numbers />
                {homeDatas.checkerboards.length > 3 &&
                    <Checkerboard
                        checkerboards={homeDatas.checkerboards.slice(3, home.checkerboards.length)}
                    />
                }
                <Brands />
                <Map
                    datas={siteDatas}
                />
            </Layout>
        )
    )
}

export async function getStaticProps() {
    const { siteDatas } = await fetchSiteDatas()
    const { actualities } = await getActualities()
    const { home } = await getHome()
    return {
        props: {
            datas: siteDatas,
            home: home,
            actualities: actualities
        },
    };
}