import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const Delivery = () => {
    return (
        <DeliveryContainer>
            <div className='container-lg'>
                <div className='delivery'>
                    <Image
                        className="map-pin"
                        src='/img/map-pin.png'
                        alt='map-pin'
                        width={368}
                        height={368}
                        unoptimized={true}
                    />
                    <div className='content-banner'>
                        <h2>Livraison <span>à domicile</span></h2>
                        <p><strong>Livraison à domicile gratuite</strong> sur la <strong>commune de Meillonnas</strong> à partir de <strong>30 euros d'achat</strong>.</p>
                        <br />
                        <p>Pour toute livraison au-delà de cette zone, merci de <a href='#form'>nous contacter</a>.</p>
                    </div>
                    <Image
                        className="map-pin-group"
                        src='/img/map-pin-group.png'
                        alt='map-pin-group'
                        width={368}
                        height={368}
                        unoptimized={true}
                    />
                </div>
            </div>
        </DeliveryContainer>
    )
}

export default Delivery

const DeliveryContainer = styled.div`
    height           : auto;
    padding          : 50px 0;
    background-color : var(--primary);

    .delivery {
        position : relative;
        display  : flex;
        width    : 100%;
        overflow : hidden;

        @media(max-width: 1320px) {
            border-radius : 0;
        }
        @media(max-width: 768px) {
            flex-direction : column;
            padding-left   : 0;
            text-align     : center;
        }
    }

    h2 {
        font-size     : 44px;
        margin-bottom : 20px;
        span {
            color : var(--yellow);
        }
        @media(max-width: 768px) {
            font-size  : 1.9rem;
            text-align : center;
        }
    }

    p,
    a {
        font-size : 20px;
    }

    a {
        color : var(--yellow);
    }

    h2,
    p {
        color : white;
    }

    strong {
        font-weight : 800;
    }

    .map-pin-group {
        position    : absolute;
        right       : 0;
        top         : 0;
        bottom      : 0;
        flex-shrink : 0;
        width       : auto;
        height      : 100%;
        z-index     : 0;

        @media(max-width: 1200px) {
            right : -150px;
        }
        @media(max-width: 992px) {
            right : -220px;
        }
        @media(max-width: 768px) {
            display : none;
        }
    }
    .map-pin {
        height : 230px;
        width  : auto;
        margin : auto 0;

        @media(max-width: 992px) {
            height : 150px;
            margin : 40px auto auto;
        }
        @media(max-width: 768px) {
            height     : 100px;
            margin-top : 0;
        }
    }

    .content-banner {
        padding : 40px 320px 40px 40px;

        @media(max-width: 1200px) {
            padding : 40px 170px 40px 40px;
        }
        @media(max-width: 992px) {
            padding : 40px 100px 40px 40px;
        }
        @media(max-width: 768px) {
            padding : 40px 25px 0;
        }
    }
`