import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Actuality from "../../../src/layouts/Actuality";
import NextBreadcrumbs from "../../../src/tools/Breadcrumb";
import actualites from '../../../data/actualites.json'
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

export default function Actu({ datas }) {
    const router = useRouter()
    const [actu, setActu] = useState({})
    const [gallery, setGallery] = useState([])
    const [lightbox, setLightbox] = useState({ module: '', open: false, image: null, title: '' })

    useEffect(() => {
        if (actualites.length > 0) {
            const current = actualites.find(actu => actu.date === router.query.date && actu.url === router.query.actuality)
            if (typeof current === "object") {
                if (Object.keys(current).length > 0) {
                    setActu(current)
                    if (current.gallery) {
                        setGallery(current.gallery.map(img => {
                            return {
                                "name": `/././actualites/${current.date}/${img.name}`,
                                "alt": img.date,
                                "title": img.title
                            }
                        }))
                    }
                }
            }
        }
    }, [router, actualites])


    return (
        <>
            <Head>
                <title>{`${datas.denomination} ${actu.title ? " - " + actu.title : ''}`}</title>
                <meta name="description" content={actu.title} />
                <meta id="og-title" property="og:title" content={actu.title + ' - ' + datas.denomination} key="title" />
                <meta id="og-image" property="og:image" content={`/././actualites/${actu.date}/${actu.image}`} key="image" />
                <meta id="og-image-secure_url" property="og:image:secure_url" content={`/././actualites/${actu.date}/${actu.image}`} />
                <meta id="og-description" property="og:description" content={actu.title} />
            </Head>

            {Object.keys(actu).length > 0 &&
                <Actuality image={`/././actualites/${actu.date}/${actu.image}`}>
                    <NextBreadcrumbs denomination={datas.denomination} />
                    <div className="title">
                        <h1>{actu.title}</h1>
                        <div className="date">{actu.date_full}</div>
                    </div>
                    <div className="actu-inner-container">
                        <div className="actu-img">
                            <img
                                src={`/././actualites/${actu.date}/${actu.image}`}
                                alt={datas.denomination + '-' + actu.title}
                                title={datas.denomination + '-' + actu.title}
                                onClick={() => setLightbox({ module: 'main-img', open: true, image: `/././actualites/${actu.date}/${actu.image}`, title: actu.title })}
                            />
                        </div>
                        {lightbox.open && lightbox.module === 'main-img' &&
                            <Lightbox
                                mainSrc={lightbox.image}
                                onCloseRequest={() =>
                                    setLightbox({ module: '', open: false, image: null, title: actu.title })
                                }
                                imageTitle={lightbox.title}
                                imageLoadErrorMessage="Une erreur est survenu... L'image ne peut pas être chargée."
                            />
                        }
                        <p className="actu-txt">{actu.text}</p>
                    </div>

                    {actu?.gallery?.length > 0 &&
                        <div className="actuality-gallery">
                            <div className="masonry">
                                {actu.gallery.map((img, key) => {
                                    return (
                                        <div className="masonry-brick gallery-brick" key={key}>
                                            <img
                                                src={`/././actualites/${actu.date}/${img.name}`}
                                                alt={img.alt}
                                                title={img.title}
                                                className="gallery-img"
                                                onClick={() => setLightbox({ module: 'gallery', open: true, image: key, title: img.title })}
                                            />
                                            {img.title &&
                                                <div className="title">{img.title}</div>
                                            }
                                        </div>
                                    )
                                })}
                                {lightbox.open && lightbox.module === 'gallery' &&
                                    <Lightbox
                                        mainSrc={gallery[lightbox.image].name}
                                        nextSrc={gallery[(lightbox.image + 1) % gallery.length].name}
                                        prevSrc={gallery[(lightbox.image + gallery.length - 1) % gallery.length].name}
                                        onCloseRequest={() =>
                                            setLightbox({ module: null, open: false, image: null })
                                        }
                                        onMovePrevRequest={() =>
                                            setLightbox(prevState => ({ ...prevState, image: (lightbox.image + gallery.length - 1) % gallery.length }))
                                        }
                                        onMoveNextRequest={() =>
                                            setLightbox(prevState => ({ ...prevState, image: (lightbox.image + 1) % gallery.length }))
                                        }
                                        imageTitle={gallery[lightbox.image].title}
                                        imageLoadErrorMessage="Une erreur est survenu... L'image ne peut pas être chargée."
                                    />
                                }
                            </div>
                        </div>
                    }
                </Actuality>
            }
        </>
    )
}