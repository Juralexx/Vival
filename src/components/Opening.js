import React from 'react'
import styled from 'styled-components'
import useOpenState from 'functions/useOpenState'
import { addClass } from 'functions/utils'

const Opening = ({ datas }) => {
    const { openState, convertNumberInHour } = useOpenState(datas);

    return (
        openState &&
        <OpeningContainer className={`${addClass(!openState.isOpen, 'closed')}`}>
            {openState.isOpen &&
                <React.Fragment>
                    <span className='font-semibold'>Ouvert </span>
                    <span>| Ferme</span>
                    {openState.willCloseAt.hour &&
                        <span> à {convertNumberInHour(openState.willCloseAt.hour)}</span>
                    }
                </React.Fragment>
            }
            {!openState.isOpen &&
                <React.Fragment>
                    <span className='font-semibold'>Fermé </span>
                    <span>| Ouvre </span>
                    {openState.willOpenAt?.day &&
                        <span className='lowercase'>{openState.willOpenAt?.day}</span>
                    }
                    {openState.willOpenAt?.hour &&
                        <span> à {convertNumberInHour(openState.willOpenAt?.hour)}</span>
                    }
                </React.Fragment>
            }
        </OpeningContainer>
    )
}

export default Opening

const OpeningContainer = styled.div`
    display          : inline-block;
    position         : relative;
    margin-top       : 40px;
    margin-right     : 10px;
    padding          : 8px 15px 6px 30px;
    color            : var(--success);
    background-color : var(--body);
    border-radius    : var(--rounded-md);
    box-shadow       : var(--shadow-lg-colored);

    &:before {
        content          : '';
        position         : absolute;
        left             : 10px;
        top              : 50%;
        transform        : translateY(-50%);
        width            : 10px;
        height           : 10px;
        border-radius    : var(--rounded-full);
        background-color : var(--success);
    }

    &.closed {
        color : var(--danger);

        &:before {
            background-color : var(--danger);
        }
    }
`