import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Lightbox from 'react-18-image-lightbox'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import Icon from 'components/tools/icons/Icon';

const CarouselClassic = ({ datas, page, carousel }) => {
    const { images, title, content } = carousel
    const [lightbox, setLightbox] = React.useState({ open: false, image: null, title: '' })
    const [caption, setCaption] = React.useState(images[0].alternativeText)
    const getUrl = (url) => { return `${process.env.SERVER_URL}${url}` }

    return (
        <React.Fragment>
            <CarouselContainer>
                {title &&
                    <h2>{title}</h2>
                }
                {content  &&
                    <p>{content}</p>
                }
                <Swiper
                    className='carousel'
                    modules={[Navigation, Autoplay, EffectCoverflow]}
                    autoplay={{ delay: 500000 }}
                    slidesPerView={'auto'}
                    effect='coverflow'
                    coverflowEffect={{
                        rotate: 0,
                        depth: 200,
                        modifier: 1.5,
                        slideShadows: false,
                    }}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    navigation={{
                        nextEl: ".swiper__button.next",
                        prevEl: ".swiper__button.previous",
                    }}
                    onSlideChange={({ realIndex }) => setCaption(images[realIndex].alternativeText)}
                >
                    <div className="swiper__button previous">
                        <Icon name="DoubleArrowLeft" />
                    </div>
                    <div className="swiper__button next">
                        <Icon name="DoubleArrowRight" />
                    </div>
                    {images.map((img, key) => {
                        return (
                            <SwiperSlide className="carousel-slide" key={key}>
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
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                {caption &&
                    <div className='caption'>
                        {caption}
                    </div>
                }
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

export default CarouselClassic

const CarouselContainer = styled.div`
    position : relative;
    width    : 100%;
    height   : auto;

    .carousel {
        position       : relative;
        height         : 350px;
        width          : 100%;
        padding-top    : 30px;
        padding-bottom : 50px;
        margin         : 0;

        @media(max-width: 768px) {
            height : 300px;
        }
    }

    .carousel-slide {
        width           : 400px;
        display         : flex;
        align-items     : center;
        justify-content : center;
        border-radius   : var(--rounded-sm);

        @media(max-width: 768px) {
            max-width : 350px;
        }

        img {
            height        : 100%;
            min-width         : 100%;
            margin        : 0 auto;
            object-fit    : cover;
            border-radius : var(--rounded-sm);
            box-shadow    : var(--shadow-smooth);
        }
    }

    .caption {
        position   : absolute;
        width      : 100%;
        max-width  : 768px;
        top        : calc(100% - 30px);
        left       : 50%;
        transform  : translateX(-50%);
        text-align : center;
    }
`