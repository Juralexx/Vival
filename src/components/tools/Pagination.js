import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Icon from './icons/Icon'
import { addActive, addClass } from 'functions/utils'

const Pagination = (props) => {
    const { array, baseRoute, currentPage } = props

    return (
        array &&
        <PaginationContainer>
            <div className="pagination">
                {currentPage - 1 > 0 &&
                    <React.Fragment>
                        <Link href={`${baseRoute}`} className='arrow' passHref>
                            <Icon name="DoubleArrowLeft" />
                        </Link>
                        <Link href={`${baseRoute}/?p=${currentPage - 1}`} className='arrow' passHref>
                            <Icon name="CaretLeft" />
                        </Link>
                    </React.Fragment>
                }
                {[...new Array(array.length)].map((_, key) => {
                    return (
                        <Link href={`${baseRoute}/?p=${key + 1}`}
                            key={key}
                            className={`${addClass(currentPage > (key + 3) || currentPage < (key - 1), 'hidden')} ${addActive(currentPage === (key + 1))}`}
                        >
                            {key + 1}
                        </Link>
                    )
                })}
                {currentPage + 1 <= array.length &&
                    <React.Fragment>
                        <Link href={`${baseRoute}/?p=${currentPage + 1}`} className='arrow' passHref>
                            <Icon name="CaretRight" />
                        </Link>
                        <Link href={`${baseRoute}/?p=${array.length}`} className='arrow' passHref>
                            <Icon name="DoubleArrowRight" />
                        </Link>
                    </React.Fragment>
                }
            </div>
        </PaginationContainer>
    )
}

export default Pagination

const PaginationContainer = styled.div`
    display         : flex;
    align-items     : center;
    justify-content : center;
    padding         : 30px 0;

    .pagination {
        display : inline-block;

        a {
            display         : flex;
            align-items     : center;
            justify-content : center;
            height          : 36px;
            width           : 36px;
            margin          : 0 2px;
            color           : var(--text);
            float           : left;
            border-radius   : var(--rounded-md);

            &.active {
                background-color : rgba(var(--primary-rgb), 0.2);
                color            : var(--primary);
                font-weight      : 500;
            }

            &.hidden {
                display : none;
            }

            &.arrow {
                width : 28px;
                svg {
                    height : 22px;
                    width  : 22px;
                }
            }

            &:hover {
                &:not(.active):not(.arrow) {
                    background-color : rgba(var(--primary-rgb), 0.2);
                    color            : var(--primary);
                }
                &.arrow {
                    svg {
                        color : var(--primary);
                    }
                }
            }
        }
    }
`