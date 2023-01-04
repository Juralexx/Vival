import React from 'react'
import Link from "next/link";
import { Revealer } from '../tools/animations'
import { FaShoppingBasket, FaLeaf, FaNewspaper, FaSnowflake } from 'react-icons/fa'
import { GiFruitBowl } from 'react-icons/gi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Bricks = () => {
    const array = [
        {
            svg: <FaShoppingBasket />,
            title: 'Lorem ispum dolor',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo'
        },
        {
            svg: <FaLeaf />,
            title: 'Lorem ispum dolor',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo'
        },
        {
            svg: <FaNewspaper />,
            title: 'Lorem ispum dolor',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo'
        },
        {
            svg: <GiFruitBowl />,
            title: 'Lorem ispum dolor',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo'
        },
        {
            svg: <FaSnowflake />,
            title: 'Lorem ispum dolor',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo'
        },
    ]

    return (
        <div className="bricks" id="bricks">
            <div className="bricks-container col-md-8">
                <div className="brick-text col-md-4">
                    <Revealer delay={200}>
                        <h2>Produits à <span>découvrir</span></h2>
                    </Revealer>
                    <Revealer delay={300}>
                        <p>Magasin d’alimentation, VIVAL BULGNEVILLE vous propose un large choix de produits
                            de qualité et vous régale avec ses nombreux produits de boulangerie.</p>
                    </Revealer>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView='auto'
                    className="brick-swiper col-md-8"
                    pagination={{ clickable: true }}
                    style={{ marginLeft: 'unset' }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {array.map((el, key) => {
                        return (
                            <SwiperSlide className="inner-brick-container" key={key}>
                                <div className="inner-brick">
                                    <Link href="#">
                                        <div className="brick-icon">
                                            {el.svg}
                                        </div>
                                        <span>{el.title}</span>
                                    </Link>
                                    <p>{el.text}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Bricks