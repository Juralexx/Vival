import React from 'react'
import styled from 'styled-components'
import Icon from 'icons/Icon'

const FacebookCard = ({ datas }) => {
    return (
        <Card>
            <a href={"https://www.facebook.com/" + datas.facebook} target="_blank" rel="noreferrer">
                <Icon name="FacebookCircle" />
                Suivez-nous sur<br /> <span>Facebook</span>
            </a>
        </Card>
    )
}

export default FacebookCard

const Card = styled.div`
    position         : relative;
    width            : 330px;
    background-color : var(--body);
    border           : 1px solid var(--light-border);
    border-radius    : var(--rounded-2xl);
    box-shadow       : var(--shadow-colored);
    margin           : auto;
    overflow         : hidden;

    svg {
        position : absolute;
        left     : -20px;
        top      : -20px;
        width    : 100px;
        height   : 100px;
        color    : var(--primary);
        opacity  : 0.4;
    }

    a {
        display     : block;
        height      : 100%;
        width       : 100%;
        color       : var(--primary-dark);
        padding     : 15px 15px 15px 90px;
        font-size   : 26px;
        line-height : 30px;

        span {
            font-weight    : 900;
            text-transform : uppercase;
            letter-spacing : 1.1px;
            font-size      : 32px;
        }
    }
`