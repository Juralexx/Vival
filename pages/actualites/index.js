import Head from 'next/head'
import Link from 'next/link'
import Brands from '../../src/components/Brands'
import HeaderSlim from '../../src/components/HeaderSlim'
import Map from '../../src/components/Map'
import Numbers from '../../src/components/Numbers'
import Parallax from '../../src/components/Parallax'
import NextBreadcrumbs from '../../src/tools/Breadcrumb'
import { getImg } from '../../src/tools/Utils'
import actualites from '../../data/actualites.json'

export default function Actualities({ datas }) {
    const title = 'Nos actualités'

    return (
        <>
            <Head>
                <title>{`${datas.denomination} - ${title}`}</title>
                <meta name="description" content={title} />
                <meta id="og-title" property="og:title" content={datas.denomination + ' - ' + title + ' à ' +  datas.city} key="title" />
                <meta id="og-image" property="og:image" content={datas.image} key="image" />
                <meta id="og-image-secure_url" property="og:image:secure_url" content={datas.image} />
                <meta id="og-description" property="og:description" content={datas.denomination + ' - ' + title + ' à ' +  datas.city}  key="description" />
            </Head>

            <HeaderSlim />
            <NextBreadcrumbs denomination={datas.denomination} />

            <h1>{title}</h1>

            <div className='container-lg actualites-container'>
                {actualites.map((actu, key) => {
                    return (
                        <div className="row actualite" key={key}>
                            <div className="col-12 col-md-4 actu-img rounded-md shadow-lg" style={getImg('actualites/' + actu.date + '/' + actu.image)}></div>
                            <div className="col-12 col-md-8 actu-txt">
                                <h3>
                                    <Link href={'/actualites/' + actu.date + '/' + actu.url} passHref>{actu.title}</Link>
                                </h3>
                                <div className="date">{actu.date_full}</div>
                                <p>{actu.text}</p>
                                <Link href={'/actualites/' + actu.date + '/' + actu.url} className="btn btn-primary">
                                    Lire la suite
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            
            <Numbers />
            <Parallax />
            <Brands />
            <Map />
        </>
    )
}