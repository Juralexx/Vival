import React from 'react'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import Lightbox from 'react-18-image-lightbox'

const Billboard = (props) => {
    const { datas, page, billboard } = props
    const { title, content, images, images_per_line } = billboard
    const [lightbox, setLightbox] = React.useState({ open: false, image: null, title: '' })

    const getUrl = (url) => { return `${process.env.SERVER_URL}${url}` }

    return (
        <BillboardContainer imagesPerLine={images_per_line}>
            {title &&
                <h2>{title}</h2>
            }
            {content &&
                <p>{content}</p>
            }
            <div className='billboard'>
                {images.map((img, key) => {
                    return (
                        <div className='billboard-card' key={key}>
                            {img.title &&
                                <h3>{img.title}</h3>
                            }
                            {img.text && img.text_placement === 'Au-dessus' &&
                                <p>{img.text}</p>
                            }
                            <Image
                                src={getUrl(img.url)}
                                alt={img.alternativeText || `${datas.denomination} - ${page.title}`}
                                title={img.alternativeText}
                                unoptimized={true}
                                style={{ width: 'auto' }}
                                width={0}
                                height={0}
                                onClick={() => setLightbox({ open: true, image: key, title: img.alternativeText })}
                            />
                            {img.text && img.text_placement === 'En-dessous' &&
                                <p>{img.text}</p>
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
        </BillboardContainer>
    )
}

export default Billboard

const BillboardContainer = styled.div`
    padding : 40px 0 60px;

    h2 {
        padding-bottom : 20px;
    }

    h3 {
        font-weight    : 600;
        padding-bottom : 10px;
    }

    > p {
        padding-bottom : 30px;
    }

    p {
        padding-bottom : 20px;
    }

    .caption {
        padding : 20px 0;
    }

    .billboard {
        display : grid;

        ${props => props.imagesPerLine === 'Un' && css`
            grid-template-columns : 1fr;
            grid-gap              : 50px;
        `};
        ${props => (props.imagesPerLine === 'Deux' || !props.imagesPerLine) && css`
            grid-template-columns : 1fr 1fr;
            grid-gap              : 25px;

            @media(max-width: 576px) {
                grid-template-columns : 1fr;
            }
        `};
        ${props => props.imagesPerLine === 'Trois' && css`
            grid-template-columns : 1fr 1fr 1fr;
            grid-gap              : 25px;

            @media(max-width: 992px) {
                grid-template-columns : 1fr 1fr;
            }
            @media(max-width: 576px) {
                grid-template-columns : 1fr;
            }
        `};
    }

    .billboard-card {
        width : 100%;

        img {
            min-width : 100%;
            height    : auto;
        }
    }
`