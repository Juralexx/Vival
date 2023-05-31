import React from 'react'
import CarouselClassic from 'components/shared/carousel/CarouselClassic'
import CarouselPhoto from 'components/shared/carousel/CarouselPhoto'
import styled from 'styled-components'

const Carousel = (props) => {
    const { carousel } = props

    return (
        carousel.images && (
            carousel.images?.length > 0 && (
                <CarouselWrapper>
                    {(carousel.carousel_type === 'Classique' || !carousel.carousel_type) &&
                        <CarouselClassic {...props} />
                    }
                    {carousel.carousel_type === 'Photo' &&
                        <CarouselPhoto {...props} />
                    }
                </CarouselWrapper>
            )
        )
    )
}

export default Carousel

const CarouselWrapper = styled.div`
    padding : 50px 0;

    h2 {
        padding-bottom : 30px;
        text-align     : center;
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

    .swiper__button {
        width            : auto;
        height           : auto;
        padding          : 7px;
        color            : var(--text);
        background-color : var(--body);
        box-shadow       : var(--shadow-sm);
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
`