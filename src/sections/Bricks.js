import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { Revealer } from 'tools/Revealer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Bricks({ datas }) {
    return (
        <div className='av-bricks' id="bricks">
            <div className="av-bricks-container col-md-8">
                <div className='av-brick-text-container col-md-4'>
                    <div className="av-brick-text">
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
                    className="av-bricks-swiper col-md-8"
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
                            <SwiperSlide className="av-brick-container" key={key}>
                                <div className="av-brick">
                                    <Link href={el?.link} passHref>
                                        <div className="av-brick-top">
                                            <Image
                                                src={el.image ? `/img${el.image}` : `/img/image-default.jpg`}
                                                alt={el.title}
                                                width={500}
                                                height={370}
                                            />
                                        </div>
                                        <div className='av-brick-content'>
                                            <div className='title'>{el.title}</div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}