import React from 'react'
import styled from 'styled-components'
import Icon from './tools/icons/Icon'

const HeaderAlert = ({ datas }) => {
    return (
        <AlertContainer>
            <Icon name="InfoCircle" />
            <div className='title'>
                {datas.title}
            </div>
            <div
                className='alter-content'
                dangerouslySetInnerHTML={{ __html: datas.content}}
            />
        </AlertContainer>
    )
}

export default HeaderAlert

const AlertContainer = styled.div`
    position         : relative;
    padding          : 15px;
    background-color : var(--body);
    border-radius    : var(--rounded-lg);
    box-shadow       : var(--shadow-lg-colored);
    width            : 100%;
    max-width        : 450px;
    margin-top       : 20px;
    overflow         : hidden;
    z-index          : 1;

    svg {
        position      : absolute;
        top           : -10px;
        right         : -10px;
        width         : 44px;
        height        : 44px;
        color         : var(--secondary);
        border-radius : var(--rounded-full);
    }

    .title {
        font-size     : 20px;
        font-weight   : 600;
        margin-bottom : 5px;
        color         : var(--secondary);
    }
`