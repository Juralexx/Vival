import React from 'react'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import Lightbox from 'react-18-image-lightbox'

const Img = (props) => {
    const { image, page, datas } = props
    const [lightbox, setLightbox] = React.useState({ open: false, image: null, title: '' })

    return (
        image?.image && (
            <ImgContainer imageSize={image.image_size}>
                {image.title &&
                    <h2>{image.title}</h2>
                }
                <Image
                    src={`${process.env.SERVER_URL}${image.image.url}`}
                    alt={image.title || `${datas.denomination} - ${page.title}`}
                    title={image.title || `${datas.denomination} - ${page.title}`}
                    width={368}
                    height={368}
                    unoptimized={true}
                    onClick={() => setLightbox({ open: true, image: `${process.env.SERVER_URL}${image.image.url}`, title: image.title || page.title })}
                />
                {lightbox.open &&
                    <Lightbox
                        mainSrc={lightbox.image}
                        onCloseRequest={() => setLightbox({ open: false, image: null, title: page.title })}
                        imageTitle={lightbox.title}
                        imageLoadErrorMessage="Une erreur est survenu... L'image ne peut pas être chargée."
                    />
                }
                {image.content &&
                    <div className='image-text'>
                        {image.content}
                    </div>
                }
            </ImgContainer>
        )
    )
}

export default Img

const ImgContainer = styled.div`
    display   : block;
    width     : 100%;
    max-width : 700px;
    padding   : 40px 0;
    margin    : 0 auto;
    cursor    : pointer;

    ${props => props.imageSize === 'Petite' && css`
        max-width : 500px;
    `}
    ${props => props.imageSize === 'Moyenne' && css`
        max-width : 700px;
    `}
    ${props => props.imageSize === 'Grande' && css`
        max-width : 100%;
    `}

    h2 {
        margin-bottom : 20px;
    }

    img {
        width         : 100%;
        height        : auto;
        border-radius : var(--rounded-md);
    }

    .image-text {
        padding-top : 20px;
        text-align  : justify;
    }
`