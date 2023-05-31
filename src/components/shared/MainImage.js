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
            className='main-img'
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
    display          : block;
    position         : relative;
    background-color : var(--body);
    cursor           : pointer;
    overflow         : hidden;
    transition       : .3s ease;
    display          : ${props => !props.imageDisplay ? 'none' : 'block'};

    ${props => props.imageSide === 'Gauche' && css`
        float     : left;
        margin    : 0 10px 10px 0;
        padding   : 0 20px 20px 0;
        max-width : 405px;
    `};
    ${props => props.imageSide === 'Droite' && css`
        float     : right;
        margin    : 0 0 10px 10px;
        padding   : 0 0 20px 20px;
        max-width : 405px;
    `};
    ${props => props.imageSide === 'Bas' && css`
        float     : none;
        margin    : 50px auto 0;
        max-width : 450px;
    `};

    img {
        display       : inline-block;
        max-width     : 100%;
        height        : auto;
        object-fit    : cover;
        border-radius : var(--rounded-md);
        transition    : .3s ease;
    }

    @media(max-width: 992px) {
        float      : none;
        width      : 100%;
        max-height : auto;
        margin     : 40px auto 0;
        padding    : 0;

        img {
            object-fit : contain;
            width      : 100%;
        }
    }
    @media(max-width: 576px) {
        max-width : 100%;
    }
`