import React from 'react'
import Link from "next/link";
import styled from 'styled-components';
import { Revealer } from 'tools/Revealer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Icon from 'icons/Icon';
import Image from 'next/image';

const Bricks = ({ datas }) => {
    return (
        <BricksContainer id="bricks">
            <div className="bricks-container col-md-8">
                <div className='brick-text-container col-md-4'>
                    <div className="brick-text">
                        <Revealer delay={200}>
                            <h2>{datas.summary.title}</h2>
                        </Revealer>
                        <Revealer delay={300}>
                            <div dangerouslySetInnerHTML={{ __html: datas.summary.content }} />
                        </Revealer>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    className="brick-swiper col-md-8"
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    slidesPerView={'auto'}
                    spaceBetween={20}
                    breakpoints={{
                        1300: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    }}
                >
                    {datas?.summary.small_cards.map((el, key) => {
                        return (
                            <SwiperSlide className="inner-brick-container" key={key}>
                                <div className="inner-brick">
                                    <Link href="#" passHref>
                                        <div className="brick-top">
                                            <Image
                                                src={el.image ? `/img${el.image}` : `/img/image-default.jpg`}
                                                alt={el.title}
                                                width={500}
                                                height={370}
                                            />
                                        </div>
                                        <div className='brick-content'>
                                            <div className='title'>{el.title}</div>
                                            <p>{el.content}</p>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </BricksContainer>
    )
}

export default Bricks

const BricksContainer = styled.div`
    position   : relative;
    display    : flex;
    width      : 100%;
    min-height : 200px;
    padding    : 50px 0;
    background : var(--primary-xxlight);

    .bricks-container {
        position      : relative;
        width         : 100%;
        max-width     : 1440px;
        display       : flex;
        align-items   : center;
        margin        : 0 auto;
        padding-right : 0;
    }

    .brick-text-container {
        display       : flex;
        align-items   : center;
        height        : 100%;
        min-width     : 350px;
    }

    .brick-text {
        margin      : auto;
        padding     : 20px 15px 20px 0;
        width       : 100%;
        flex-shrink : 0;

        &:before {
            position      : absolute;
            content       : '';
            left          : 0;
            top           : 0;
            background    : rgba(var(--primary-xlight-rgb), 0.4);
            height        : 100px;
            width         : 100px;
            border-radius : 10px;
        }

        &:after {
            position      : absolute;
            content       : '';
            right         : 0;
            bottom        : 0;
            background    : rgba(var(--primary-xlight-rgb), 0.3);
            height        : 120px;
            width         : 120px;
            border-radius : 10px;
        }

        h2 {
            margin-bottom : 20px;
            font-size     : 32px;

            span {
                color : var(--primary);
            }
        }
    }

    .brick-swiper {
        display        : flex;
        flex-direction : column;
        padding        : 5px;

        .swiper-pagination {
            position   : relative;
            margin-top : 10px;
        }

        .swiper-pagination-bullets {
            bottom : 0;
        }

        .swiper-pagination-bullet-active {
            background : var(--primary);
        }
    }

    .inner-brick-container {
        position  : relative;
        cursor    : pointer;
        width     : auto;
        max-width : 300px;

        .inner-brick {
            width         : 100%;
            margin        : 0 auto;
            background    : var(--body);
            border        : 1px solid var(--light-border);
            border-radius : var(--rounded-3xl);
            transition    : 0.7s ease;
            box-shadow    : var(--shadow-bottom);
            overflow      : hidden;

            &:hover {
                transform  : scale(1.05);
                transition : 0.3s ease;
            }

            a {
                display        : flex;
                flex-direction : column;
                margin         : 0 auto;
            }

            .brick-top {
                width  : 100%;
                height : 150px;

                img {
                    width      : 100%;
                    height     : 100%;
                    object-fit : cover;
                }
            }

            .brick-content {
                padding    : 20px;
                text-align : center;

                .title {
                    font-size      : 22px;
                    font-weight    : 600;
                    padding-bottom : 10px;
                }
            }
        }
    }

    @media(max-width:768px) {
        .bricks-container {
            display        : flex;
            flex-direction : column;
            
            .brick-text {
                padding : 20px 22px;
            }

            .brick-swiper {
                min-height : 345px;
            }
        }
    }

    @media(max-width: 576px) {
        .bricks-container {
            .brick-text {
                padding : 20px 0;
            }
        }
    }
`