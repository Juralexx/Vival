import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Lightbox from 'react-18-image-lightbox'

const Gallery = (props) => {
    const { datas, page, gallery } = props
    const { title, content, gallery_type, images, columns } = gallery
    const [lightbox, setLightbox] = React.useState({ open: false, image: null, title: '' })

    const getUrl = (url) => { return `${process.env.SERVER_URL}${url}` }

    const galleryType = gallery_type === 'Masonry' ? 'masonry' : 'classic-gallery'

    const getColumns = (columns) => {
        switch (columns) {
            case 'Un': return 1
            case 'Deux': return 2
            case 'Trois': return 3
            case 'Quatre': return 4
            default: return 3
        }
    }

    return (
        images?.length > 0 && (
            <GalleryContainer columns={getColumns(columns)}>
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
                        imageTitle={images[lightbox.image].alternativeText}
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

    

    /**
    *   Gallery picture
    */

    .gallery-brick {
        position      : relative;
        overflow      : hidden;
        width         : 100%;
        border-radius : var(--rounded-sm);

        &:hover {
            .gallery-img {
                transform  : scale(1.1);
                transition : .3s ease;
            }
        }

        .gallery-img {
            transition : .3s ease;
            width      : 100%;
            height     : auto;
        }

        .caption {
            position           : absolute;
            bottom             : 0;
            background         : rgba(255, 255, 255, 0.8);
            width              : 100%;
            height             : auto;
            padding            : 5px;
            text-align         : center;
            text-overflow      : ellipsis;
            overflow           : hidden;
            width              : 100%;
            display            : -webkit-box;
            -webkit-line-clamp : 2;
            -webkit-box-orient : vertical;
        }
    }

    /**
    *   Classic gallery
    */

    .classic-gallery {
        display               : grid;
        grid-template-columns :  ${props => props.columns ? `repeat(${props.columns}, minmax(0, 1fr))` : 'repeat(3, minmax(0, 1fr))'};
        grid-gap              : 20px;

        .classic-gallery-brick {
            height   : 300px;
            overflow : hidden;

            img {
                width      : 100% !important;
                height     : 100%;
                object-fit : cover;
            }
        }
    }

    @media(max-width:390px) {
        .classic-gallery {
            grid-template-columns : 1fr;
            grid-gap              : 12px;
        }
    }

    @media (min-width:391px) and (max-width: 768px) {
        .classic-gallery {
            grid-template-columns : repeat(2, minmax(0, 1fr));
            grid-gap              : 12px;
        }
    }

    /**
    *   Masonry gallery
    */

    .masonry {
        transition    : all .5s ease-in-out;
        column-gap    : 20px;
        column-fill   : initial;
        margin-bottom : 50px;
        
        .masonry-brick {
            margin-bottom  : 20px;
            display        : block;
            cursor         : pointer;
        }
    }

    @media(max-width:390px) {
        .masonry {
            column-count : 1;
            column-gap    : 12px;
            .masonry-brick {
                margin-bottom : 12px;
            }
        }
    }

    @media (min-width:391px) and (max-width: 768px) {
        .masonry {
            column-count  : 2;
            column-gap    : 12px;
            .masonry-brick {
                margin-bottom : 12px;
            }
        }
    }

    @media (min-width: 769px) {
        .masonry {
            column-count : ${props => props.columns ? props.columns : '3'};
        }
    }
`