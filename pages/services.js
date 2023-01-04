import Head from 'next/head'
import Brands from '../src/components/Brands'
import Parallax from '../src/components/Parallax'
import HeaderSlim from '../src/components/HeaderSlim'
import { getImg } from '../src/tools/Utils'
import NextBreadcrumbs from '../src/tools/Breadcrumb'
import Map from '../src/components/Map'

export default function Services({ datas }) {
    const title = 'Services'

    return (
        <>
            <Head>
                <title>{`${datas.denomination} - ${title}`}</title>
                <meta name="description" content={title} />
                <meta id="og-title" property="og:title" content={datas.denomination + ' - ' + title + ' à ' +  datas.city} key="title" />
                <meta id="og-image" property="og:image" content={datas.image} key="image" />
                <meta id="og-image-secure_url" property="og:image:secure_url" content={datas.image} />
                <meta id="og-description" property="og:description" content={datas.denomination + ' - ' + datas.slogan + ' à ' +  datas.city}  key="description" />
            </Head>

            <HeaderSlim />

            <NextBreadcrumbs denomination={datas.denomination} />
            <h1>{title}</h1>

            <div className="checkerboard container-lg" id="checkerboard">
                <div className='checkerboard-container'>
                    <div className='row'>
                        <div className="image rounded-md shadow-2xl col-12 col-sm-12 col-md-4" style={getImg('././img/checkerboard/checkerboard-1.jpg')}>&nbsp;</div>
                        <div className="text col-12 col-sm-12 col-md-8">
                            <h2>Titre du damier</h2>
                            <p>Et licet quocumque oculos flexeris feminas adfatim multas spectare cirratas, quibus,
                                si nupsissent, per aetatem ter iam nixus poterat suppetere liberorum,
                                ad usque taedium pedibus pavimenta tergentes iactari volucriter gyris,
                                dum exprimunt innumera simulacra, quae finxere fabulae theatrales.</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="image rounded-md shadow-2xl order-1 md:order-2 col-12 col-sm-12 col-md-4" style={getImg('././img/checkerboard/checkerboard-3.jpg')}>&nbsp;</div>
                        <div className="text order-2 md:order-1 col-12 col-sm-12 col-md-8">
                            <h2>Titre du damier</h2>
                            <p>Et licet quocumque oculos flexeris feminas adfatim multas spectare cirratas,
                                quibus, si nupsissent, per aetatem ter iam nixus poterat suppetere liberorum,
                                ad usque taedium pedibus pavimenta tergentes iactari volucriter gyris,
                                dum exprimunt innumera simulacra, quae finxere fabulae theatrales.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Parallax />
            <Brands />
            <Map />
        </>
    )
}