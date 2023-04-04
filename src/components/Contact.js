import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import Form from './Form'

const LeafletMap = dynamic(() => import('./LeafletMap'), {
    ssr: false,
})

const Contact = ({ datas }) => {
    return (
        <ContactContainer id='form'>
            <div className='contact-form'>
                <h2>Nous contacter</h2>
                <p>Pour tous renseignements complémentaires, contactez-nous.</p>
                <p className='small'><small><strong>Protection de vos données :</strong> les informations que vous nous communiquez sont confidentielles. Nous nous engageons à ne jamais les diffuser ni à les transmettre à des tiers.</small></p>
                <Form />
            </div>
            <div className='map'>
                <LeafletMap datas={datas} />
            </div>
        </ContactContainer>
    )
}

export default Contact

const ContactContainer = styled.div`
    position : relative;
    height   : auto;
    width    : 100%;
    padding  : 50px 11% 150px;

    @media(max-width: 1500px) {
        padding : 50px 50px 150px;
    }
    @media(min-width: 769px) and (max-width: 1200px) {
        margin-top : 400px;
        height     : 850px;
    }
    @media(max-width: 768px) {
        height  : auto;
        padding : 50px 0 0;
    }

    .map {
        position : absolute;
        left     : 0;
        right    : -700px;
        top      : 0;
        bottom   : 0;
        z-index  : 0;

        @media(max-width: 1200px) {
            right : 0;
        }
        @media(max-width: 768px) {
            position : relative;
            width    : 100%;
            height   : 600px;
        }
    }

    .contact-form {
        position      : relative;
        width         : 100%;
        max-width     : 650px;
        padding       : 20px;
        background    : var(--body);
        border-radius : var(--rounded-md);
        box-shadow    : var(--shadow-two);
        z-index       : 2;

        @media(min-width: 769px) and (max-width: 1200px) {
            position  : absolute;
            left      : 50%;
            transform : translateX(-50%);
            top       : -350px;
        }
        @media(max-width: 1200px) {
            max-width : 768px;
        }
        @media(max-width: 768px) {
            box-shadow    : none;
            border-radius : 0;
            background    : var(--green);
            padding       : 50px 20px;
        }
    }

    &:after {
        position   : absolute;
        content    : "";
        bottom     : -1px;
        left       : 0;
        right      : 0;
        background : var(--primary);
        height     : 100px;
        width      : 100%;
        z-index    : 2;
        clip-path  : polygon(0 0, 100% 100%, 0% 100%);
    }

    h2 {
        margin-bottom : 20px;

        @media(max-width: 1200px) {
            text-align    : center;
            margin-bottom : 30px;
        }
    }

    .small {
        line-height : 1.1;
    }
`