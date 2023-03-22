import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Lightbox from 'react-18-image-lightbox'

const Gallery = (props) => {
    const { datas, page, gallery } = props
    const { title, content, gallery_type, images } = gallery
    const [lightbox, setLightbox] = React.useState({ open: false, image: null, title: '' })

    const getUrl = (url) => { return `${process.env.SERVER_URL}${url}` }

    const galleryType = gallery_type === 'Masonry' ? 'masonry' : 'classic-gallery'

    return (
        images?.length > 0 && (
            <GalleryContainer>
                {title &&
                    <h2>{title}</h2>
                }
                {content &&
                    <p>{content}</p>
                }
                <div className={galleryType}>
                    {images.map((img, key) => {
                        return (
                            <div className={`${galleryType}-brick gallery-brick`} key={key}>
                                <Image
                                    className="gallery-img"
                                    src={getUrl(img.url)}
                                    alt={img.alternativeText || `${datas.denomination} - ${page.title}`}
                                    title={img.alternativeText}
                                    width={0}
                                    height={0}
                                    style={{ width: 'auto' }}
                                    unoptimized={true}
                                    onClick={() => setLightbox({ open: true, image: key, title: img.alternativeText })}
                                />
                                {img.alternativeText &&
                                    <div className="caption">
                                        {img.alternativeText}
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>
                {lightbox.open &&
                    <Lightbox
                        mainSrc={getUrl(images[lightbox.image].url)}
                        nextSrc={getUrl(images[(lightbox.image + 1) % images.length].url)}
                        prevSrc={getUrl(images[(lightbox.image + images.length - 1) % images.length].url)}
                        onCloseRequest={() => setLightbox({ module: null, open: false, image: null })}
                        onMovePrevRequest={() => setLightbox(prev => ({ ...prev, image: (lightbox.image + images.length - 1) % images.length }))}
                        onMoveNextRequest={() => setLightbox(prev => ({ ...prev, image: (lightbox.image + 1) % images.length }))}
                        imageTitle={images[lightbox.image].caption}
                        imageLoadErrorMessage="Une erreur est survenu... L'image ne peut pas être chargée."
                    />
                }
            </GalleryContainer>
        )

    )
}

export default Gallery

const GalleryContainer = styled.div`
    padding : 40px 0;
    h2 {
        padding-bottom : 20px;
    }

    p {
        padding-bottom : 20px;
    }

    img {
        cursor : pointer;
    }
`