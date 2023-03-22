import React from 'react'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import Lightbox from 'react-18-image-lightbox'

const MainImage = ({ datas, page }) => {
    const [lightbox, setLightbox] = React.useState({ open: false, image: null, title: '' })

    return (
        <ImgContainer
            imageDisplay={page.image_display}
            imageSide={page.image_side}
        >
            <Image
                loader={() => `${process.env.SERVER_URL}${page.image.url}`}
                src={`${process.env.SERVER_URL}${page.image.url}`}
                alt={`${datas.denomination} - ${page.title}`}
                title={`${datas.denomination} - ${page.title}`}
                width={0}
                height={0}
                style={{ width: 'auto' }}
                unoptimized={true}
                onClick={() => setLightbox({ open: true, image: `${process.env.SERVER_URL}${page.image.url}`, title: page.title })}
            />
            {lightbox.open &&
                <Lightbox
                    mainSrc={lightbox.image}
                    onCloseRequest={() => setLightbox({ open: false, image: null, title: page.title })}
                    imageTitle={lightbox.title}
                    imageLoadErrorMessage="Une erreur est survenu... L'image ne peut pas être chargée."
                />
            }
        </ImgContainer>
    )
}

export default MainImage


const ImgContainer = styled.div`
    display       : block;
    position      : relative;
    max-width     : 368px;
    border-radius : var(--rounded-md);
    cursor        : pointer;
    overflow      : hidden;
    transition    : .3s ease;
    display       : ${props => !props.imageDisplay ? 'none' : 'block'};

    ${props => props.imageSide === 'Gauche' && css`
        float  : left;
        margin : 0 35px 25px 0;
    `};
    ${props => props.imageSide === 'Droite' && css`
        float  : right;
        margin : 0 0 25px 35px;
    `};
    ${props => props.imageSide === 'Haut' && css`
        float  : none;
        margin : 0px auto 30px;
    `};
    ${props => props.imageSide === 'Haut' && css`
        float  : none;
        margin : 0px auto 30px;
    `};

    img {
        display       : inline-block;
        max-width     : 100%;
        height        : auto;
        object-fit    : cover;
        border-radius : var(--rounded-lg);
        transition    : .3s ease;
    }

    &:hover {
        > img {
            transform  : scale(1.1);
            transition : .3s ease;
        }
    }

    @media(max-width: 768px) {
        float      : none;
        margin     : 0 auto 40px;
        width      : 100%;
        max-width  : 300px;
        max-height : auto;

        img {
            object-fit : contain;
            width      : 100%;
        }
    }
`