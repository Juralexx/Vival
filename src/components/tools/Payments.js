import React from 'react'
import styled from 'styled-components'
import Icon from './icons/Icon'

const Payments = () => {
    return (
        <PaymentsContainer>
            <h4>Moyens de paiements</h4>
            <div className='__flex'>
                <div className='payment-item'>
                    <div>
                        <Icon className="cb" name="CB" />
                        <Icon className="visa" name="Visa" />
                        <Icon className="mastercard" name="Mastercard" />
                    </div>
                    <p>Carte bancaire à&nbsp;partir&nbsp;de&nbsp;1€</p>
                </div>
                <div className='payment-item'>
                    <Icon className='money' name="Money" />
                    <p>Espèces</p>
                </div>
            </div>
        </PaymentsContainer>
    )
}

export default Payments

const PaymentsContainer = styled.div`
    position      : relative;
    max-width     : 500px;
    height        : auto;
    margin        : 0 auto 40px;
    border-radius : var(--rounded-md);

    @media(max-width: 576px) {
        padding : 25px 10px 20px;
    }

    h2 {
        text-align    : center;
        margin-bottom : 20px;
    }

    .__flex {
        display         : flex;
        justify-content : center;

        @media(min-width: 1101px) and (max-width: 1440px) {
            flex-direction : column;
        }
        @media(max-width: 460px) {
            flex-direction : column;
        }
    }

    .payment-item {
        padding : 20px;

        @media(max-width: 576px) {
            padding : 20px 10px;
        }

        svg {
            min-width     : 31%;
            width         : 80px;
            height        : 54px;
            margin        : 0 auto;
            background    : var(--body);
            border        : 3px solid #d5dfff;
            border-radius : var(--rounded-lg);
        }

        .money {
            width  : 80px;
            height : 54px;
        }

        .visa {
            margin : 0 8px;
        }

        .cb {
            background : #146c9c;
        }

        @media(max-width: 460px) {
            .mastercard,
            .visa,
            .cb {
                margin : 0 3px;
            }
        }

        div {
            display         : flex;
            flex-wrap       : wrap;
            align-items     : center;
            justify-content : center;
        }

        p {
            text-align  : center;
            font-weight : 600;
            margin-top  : 15px;
            font-size   : 24px;
            line-height : 1.3;

            @media(max-width: 576px) {
                font-size : 20px;
            }
        }
    }
`