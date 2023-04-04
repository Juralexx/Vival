import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const defaultButton = styled.button`
    position        : relative;
    display         : flex;
    align-items     : center;
    justify-content : center;
    width           : auto;
    max-width       : 360px;
    font-weight     : 500;
    text-align      : center;
    cursor          : pointer;
    outline         : none;
    white-space     : nowrap;
    z-index         : 1;

    &:disabled {
        opacity : 0.5;
    }
`;

/**
 * 
 */

export const Button = (props) => {
    return (
        <Btn {...props}>
            {props.children}
        </Btn>
    )
}

const Btn = styled(defaultButton)`
    max-width        : 360px;
    height           : 44px;
    position         : relative;
    display          : flex;
    align-items      : center;
    justify-content  : center;
    padding          : 0 40px;
    font-size        : 18px;
    line-height      : 18px;
    background-color : ${props => props.color === 'secondary' ? 'var(--secondary)' : 'var(--primary-light)'};
    color            : var(--white);
    border-radius    : var(--rounded-md);
    transition       : 0.3s ease-out;

    &:hover {
        background-color : ${props => props.color === 'secondary' ? 'var(--secondary)' : 'var(--primary)'};
        box-shadow       : ${props => props.color === 'secondary' ? '0px 0px 0 6px rgba(var(--secondary-rgb), 0.4)' : '0px 0px 0 6px rgba(var(--primary-rgb), 0.4)'};
    }
`

export const LinkButton = (props) => {
    const { href, target, color, onClick, className, disabled, onKeyDown, style, small } = props
    const btnProps = { color, onClick, className, disabled, onKeyDown, style, small }
    return (
        <LinkBtn {...btnProps}>
            <Link href={href} target={target}>
                {props.children}
            </Link>
        </LinkBtn>
    )
}

const LinkBtn = styled(defaultButton)`
    max-width        : 360px;
    height           : ${props => !props.small ? '44px' : '32px'};
    background-color : ${props => props.color === 'secondary' ? 'var(--secondary)' : 'var(--primary-light)'};
    border-radius    : var(--rounded-md);
    transition       : 0.3s ease-in-out;
    align-self       : ${props => !props.small ? '' : 'flex-start'};

    a {
        position        : relative;
        display         : flex;
        align-items     : center;
        justify-content : center;
        height          : 100%;
        margin-top      : ${props => !props.small ? '0' : '2px'};
        padding         : ${props => !props.small ? '0 40px' : '0 20px'};
        font-size       : 18px;
        line-height     : 18px;
        color           : var(--white);
    }

    svg {
        height       : 15px;
        width        : 15px;
        margin-right : 7px;
        margin-top   : -1px;
    }

    &:hover {
        background-color : ${props => props.color === 'secondary' ? 'var(--secondary)' : 'var(--primary)'};
        box-shadow       : ${props => props.color === 'secondary' ? '0px 0px 0 6px rgba(var(--secondary-rgb), 0.4)' : '0px 0px 0 6px rgba(var(--primary-rgb), 0.4)'};
    }
`

/**
 * 
 */

export const StyledButton = (props) => {
    const { onClick, className, disabled, onKeyDown, style } = props
    return (
        <StyledBtn {...props}>
            {props.children}
        </StyledBtn>
    )
}

const StyledBtn = styled(defaultButton)`
    display       : flex;
    align-items   : center;
    height        : 50px;
    padding-right : 70px;
    font-size     : 20px;
    line-height   : 20px;
    border-radius : var(--rounded-lg);
    overflow      : visible;

    &:after {
        content          : '';
        position         : absolute;
        right            : 0;
        height           : 50px;
        width            : 50px;
        z-index          : -1;
        transition       : 0.4s ease-in-out;
        box-shadow       : var(--shadow-smooth);
        border-radius    : var(--rounded-lg);
        background-color : var(--body);
    }

    &:before {
        content             : '';
        position            : absolute;
        display             : block;
        right               : 0;
        height              : 10px;
        width               : 50px;
        background-repeat   : no-repeat;
        background-position : center;
        background-image    : url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 36 12' xmlns='http://www.w3.org/2000/svg' fill='%23323035'%3E%3Cpath d='M36 5.847v.306c-2.859 1.255-5.122 3.52-7.087 5.847l-.596-.582c.685-1.01 1.548-1.989 2.442-2.938.268-.276.417-.613.417-.858 0-.306-.238-.612-.775-.612H0V4.99h30.431c.298 0 .775-.368.775-.674 0-.275-.12-.459-.417-.765-.864-.857-1.787-1.959-2.442-2.969L28.942 0C30.878 2.296 33.141 4.622 36 5.847z'/%3E%3C/svg%3E");
        transition          : 0.4s ease-in-out;
    }

    &:hover, &:active, &:focus {
        padding-left  : 24px;
        padding-right : 90px;
        color         : var(--primary);
        transition    : 0.4s ease-in-out;

        &:after {
            width : 100%;
        }

        &:before {
            transform        : scaleX(1.3);
            right            : 10px;
            background-image : url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 36 12' xmlns='http://www.w3.org/2000/svg' fill='%2365795c'%3E%3Cpath d='M36 5.847v.306c-2.859 1.255-5.122 3.52-7.087 5.847l-.596-.582c.685-1.01 1.548-1.989 2.442-2.938.268-.276.417-.613.417-.858 0-.306-.238-.612-.775-.612H0V4.99h30.431c.298 0 .775-.368.775-.674 0-.275-.12-.459-.417-.765-.864-.857-1.787-1.959-2.442-2.969L28.942 0C30.878 2.296 33.141 4.622 36 5.847z'/%3E%3C/svg%3E");
            transition       : 0.4s ease-in-out;
        }
    }
`;

export const LinkStyledButton = (props) => {
    const { href, target, onClick, className, disabled, onKeyDown, style } = props
    const btnProps = { onClick, className, disabled, onKeyDown, style }
    return (
        <LinkStyledBtn {...btnProps}>
            <Link href={href} target={target}>
                {props.children}
            </Link>
        </LinkStyledBtn>
    )
}

const LinkStyledBtn = styled(defaultButton)`
    max-width     : 360px;
    height        : 50px;
    border-radius : var(--rounded-lg);
    overflow      : visible;

    a {
        position      : relative;
        display       : flex;
        align-items   : center;
        height        : 50px;
        padding-right : 70px;
        font-size     : 20px;
        line-height   : 20px;
        transition    : 0.4s ease-in-out;
    }

    &:after {
        content          : '';
        position         : absolute;
        right            : 0;
        height           : 50px;
        width            : 50px;
        z-index          : -1;
        transition       : 0.4s ease-in-out;
        box-shadow       : var(--shadow-smooth);
        border-radius    : var(--rounded-lg);
        background-color : var(--body);
    }

    &:before {
        content             : '';
        position            : absolute;
        display             : block;
        right               : 0;
        height              : 10px;
        width               : 50px;
        background-repeat   : no-repeat;
        background-position : center;
        background-image    : url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 36 12' xmlns='http://www.w3.org/2000/svg' fill='%23ff8a65'%3E%3Cpath d='M36 5.847v.306c-2.859 1.255-5.122 3.52-7.087 5.847l-.596-.582c.685-1.01 1.548-1.989 2.442-2.938.268-.276.417-.613.417-.858 0-.306-.238-.612-.775-.612H0V4.99h30.431c.298 0 .775-.368.775-.674 0-.275-.12-.459-.417-.765-.864-.857-1.787-1.959-2.442-2.969L28.942 0C30.878 2.296 33.141 4.622 36 5.847z'/%3E%3C/svg%3E");
        transition          : 0.4s ease-in-out;
    }

    &:hover, &:active, &:focus {
        transition    : 0.4s ease-in-out;

        a {
            padding-left  : 24px;
            padding-right : 90px;
            color         : var(--primary);
            transition    : 0.4s ease-in-out;
        }

        &:after {
            width : 100%;
        }

        &:before {
            transform        : scaleX(1.3);
            right            : 10px;
            background-image : url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 36 12' xmlns='http://www.w3.org/2000/svg' fill='%23ff8a65'%3E%3Cpath d='M36 5.847v.306c-2.859 1.255-5.122 3.52-7.087 5.847l-.596-.582c.685-1.01 1.548-1.989 2.442-2.938.268-.276.417-.613.417-.858 0-.306-.238-.612-.775-.612H0V4.99h30.431c.298 0 .775-.368.775-.674 0-.275-.12-.459-.417-.765-.864-.857-1.787-1.959-2.442-2.969L28.942 0C30.878 2.296 33.141 4.622 36 5.847z'/%3E%3C/svg%3E");
            transition       : 0.4s ease-in-out;
        }
    }
`;

/**
 * 
 */

export const ToolsButton = (props) => {
    return (
        <ToolsBtn {...props}>
            {props.children}
        </ToolsBtn>
    )
}

const ToolsBtn = styled(defaultButton)`
    flex-shrink     : 0;
    height          : ${props => !props.small ? '44px' : '34px'};
    width           : ${props => !props.small ? '44px' : '34px'};
    display         : flex;
    justify-content : center;
    align-items     : center;
    margin          : 0 10px 0 0;
    z-index         : 100;
    border-radius   : var(--rounded-full);
    color           : ${props => props.color === 'secondary' ? 'var(--secondary)' : 'var(--primary)'};
    background      : ${props => props.color === 'secondary' ? 'rgba(var(--secondary-rgb), 0.2)' : 'rgba(var(--primary-rgb), 0.2)'};
    cursor          : pointer;
    transition      : .2s ease;

    svg {
        width  : ${props => !props.small ? '22px' : '16px'};
        height : ${props => !props.small ? '22px' : '16px'};
    }

    &:hover {
        background : ${props => props.color === 'secondary' ? 'rgba(var(--secondary-rgb), 1)' : 'rgba(var(--primary-rgb), 1)'};
        box-shadow : ${props => props.color === 'secondary' ? '0px 0px 0 6px rgba(var(--secondary-rgb), 0.4)' : '0px 0px 0 6px rgba(var(--primary-rgb), 0.4)'};
        svg {
            color : white;
        }
    }
`

export const LinkToolsButton = (props) => {
    const { href, target, onClick, className, disabled, onKeyDown, style, small, color } = props
    const btnProps = { onClick, className, disabled, onKeyDown, style, small, color }
    return (
        <LinkToolsBtn {...btnProps}>
            <Link href={href} target={target}>
                {props.children}
            </Link>
        </LinkToolsBtn>
    )
}

const LinkToolsBtn = styled(defaultButton)`
    flex-shrink     : 0;
    height          : ${props => !props.small ? '44px' : '34px'};
    width           : ${props => !props.small ? '44px' : '34px'};
    margin          : 0 10px 0 0;
    z-index         : 100;
    border-radius   : var(--rounded-full);
    color           : ${props => props.color === 'secondary' ? 'var(--secondary)' : 'var(--primary)'};
    background      : ${props => props.color === 'secondary' ? 'rgba(var(--secondary-rgb), 0.2)' : 'rgba(var(--primary-rgb), 0.2)'};
    cursor          : pointer;
    transition      : .2s ease;

    a {
        display         : flex;
        justify-content : center;
        align-items     : center;
        height          : 100%;
        width           : 100%;
    }

    svg {
        width  : ${props => !props.small ? '22px' : '16px'};
        height : ${props => !props.small ? '22px' : '16px'};
    }

    &:hover {
        background : ${props => props.color === 'secondary' ? 'rgba(var(--secondary-rgb), 1)' : 'rgba(var(--primary-rgb), 1)'};
        box-shadow : ${props => props.color === 'secondary' ? '0px 0px 0 6px rgba(var(--secondary-rgb), 0.4)' : '0px 0px 0 6px rgba(var(--primary-rgb), 0.4)'};
        svg {
            color : white;
        }
    }
`