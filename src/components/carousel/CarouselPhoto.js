import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Lightbox from 'react-18-image-lightbox'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Controller } from 'swiper';
import 'swiper/css';
import Icon from 'components/tools/icons/Icon';
import { fullImage } from 'functions/utils';

const CarouselPhoto = ({ datas, page, carousel }) => {
    const { images, title, content, autoplay } = carousel
    const [lightbox, setLightbox] = React.useState({ open: false, image: null, title: '' })
    const getUrl = (url) => { return `${process.env.SERVER_URL}${url}` }

    const [firstSwiper, setFirstSwiper] = React.useState(null);
    const [secondSwiper, setSecondSwiper] = React.useState(null);

    return (
        <React.Fragment>
            {title &&
                <h2>{title}</h2>
            }
            {content &&
                <p>{content}</p>
            }
            <CarouselContainer>
                <Swiper
                    className='gallery-carousel-top'
                    modules={[Navigation, Autoplay, Controller]}
                    onSwiper={setFirstSwiper}
                    controller={{ control: secondSwiper }}
                    autoplay={!autoplay ? false : { delay: 5000 }}
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={{
                        nextEl: ".swiper__button.next",
                        prevEl: ".swiper__button.previous",
                    }}
                >
                    <div className="swiper__button previous">
                        <Icon name="CaretLeft" />
                    </div>
                    <div className="swiper__button next">
                        <Icon name="CaretRight" />
                    </div>
                    {images.map((img, key) => {
                        return (
                            <SwiperSlide className="gallery-slide" key={key}>
                                <Image
                                    className="gallery-img"
                                    src={getUrl(img.url)}
                                    alt={img.alternativeText || `${datas.denomination} - ${page.title}`}
                                    title={img.alternativeText}
                                    unoptimized={true}
                                    style={{ width: 'auto' }}
                                    width={0}
                                    height={0}
                                    onClick={() => setLightbox({ open: true, image: key, title: img.alternativeText })}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <Swiper
                    className='gallery-thumbs'
                    modules={[Navigation, Autoplay, Controller]}
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                    slidesPerView={3}
                    centeredSlides={true}
                    slideToClickedSlide={true}
                    spaceBetween={10}
                >
                    <div className="gallery-thumbs-wrapper">
                        {images.map((img, key) => {
                            return (
                                <SwiperSlide
                                    className="gallery-thumbs-slide"
                                    key={key}
                                    style={fullImage(getUrl(img.url))}
                                />
                            )
                        })}
                    </div>
                </Swiper>
            </CarouselContainer>

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
        </React.Fragment>
    )
}

export default CarouselPhoto

const CarouselContainer = styled.div`
    position         : relative;
    width            : 100%;
    height           : auto;
    overflow         : hidden;
    background-color : #0F0F0F; //#F6F8F9
    border-radius    : var(--rounded-md);
    box-shadow       : inset var(--shadow-tiny);

    .gallery-carousel-top {
        position : relative;
        height   : 400px;
        width    : 100%;
        padding  : 10px 0;
        margin   : 0;
    }

    .gallery-slide {
        display         : flex;
        align-items     : center;
        justify-content : center;
        width           : 100%;

        img {
            max-height : 380px;
            height     : auto;
            width      : auto;
            margin     : 0 auto;
        }
    }

    .swiper__button {
        width            : auto;
        height           : auto;
        padding          : 7px;
        color            : var(--text);
        background-color : var(--body);
        box-shadow       : var(--shadow-xtiny);
        border-radius    : var(--rounded-full);
        cursor           : pointer;
        z-index          : 1;

        &.previous {
            position      : absolute;
            top           : 50%;
            left          : 10px;
            transform     : translateY(-50%);

            @media(max-width: 480px) {
                left : -10px;
            }
        }

        &.next {
            position  : absolute;
            top       : 50%;
            right     : 10px;
            transform : translateY(-50%);

            @media(max-width: 480px) {
                right : -10px;
            }
        }

        svg {
            height : 24px;
            width  : 24px;
        }
    }

    .caption {
        position   : absolute;
        bottom     : 20px;
        max-width  : 95%;
        color      : white;
        text-align : justify;
    }

    .gallery-thumbs {
        height           : 20%;
        box-sizing       : border-box;
        padding          : 10px;
        height           : 80px;
        background-color : #0F0F0F;

        .swiper-slide {
            width    : 20%;
            height   : 100%;
            overflow : hidden;

            img {
                border-radius : 0;
            }
        }

        .swiper-slide-active {
            opacity: 1;
        }
    }
`