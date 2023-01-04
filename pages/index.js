import Head from 'next/head'
import Bricks from '../src/components/Bricks'
import CheckerboardModern from '../src/components/CheckerboardModern'
import Header from '../src/components/Header'
import Intro from '../src/components/Intro'
import Checkerboard from '../src/components/Checkerboard'
import Brands from '../src/components/Brands'
import Numbers from '../src/components/Numbers'
import Parallax from '../src/components/Parallax'
import ContactBar from '../src/components/ContactBar'
import Map from '../src/components/Map'
import ActualityCarousel from '../src/components/ActualityCarousel'

export default function Home({ datas }) {
    return (
        <>
            <Head>
                <title>{`${datas.denomination} - ${datas.slogan} à ${datas.city}`}</title>
                <meta name="description" content={datas.denomination + ' - ' + datas.slogan + ' à ' +  datas.city} />
                <meta id="og-title" property="og:title" content={datas.denomination} key="title" />
                <meta id="og-image" property="og:image" content={datas.image} key="image" />
                <meta id="og-image-secure_url" property="og:image:secure_url" content={datas.image} />
                <meta id="og-description" property="og:description" content={datas.denomination + ' - ' + datas.slogan + ' à ' +  datas.city}  key="description" />
            </Head>

            <Header />
            <Bricks />
            <Intro />
            <CheckerboardModern />
            <ActualityCarousel />
            <ContactBar />
            <Parallax />
            <Numbers />
            <Checkerboard />
            <Brands />
            <Map />
        </>
    )
}