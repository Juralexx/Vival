import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyles = createGlobalStyle`
    ${variables}
    html {
        position        : relative;
        margin          : 0;
        padding         : 0;
        overflow-x      : hidden;
        scroll-behavior : smooth;
    }

    * {
        margin     : 0;
        padding    : 0;
        box-sizing : border-box;
    }

    body {
        width           : 100%;
        margin          : 0;
        padding         : 0;
        font-family     : 'Mulish', ui-sans-serif, Arial, sans-serif;
        scroll-behavior : smooth;
        overflow        : hidden;
    }

    .main {
        position : relative;
        height   : auto;
        width    : 100%;
        top      : 0;
    }

    .not-main {
        h1 {
            text-align : center;
        }
    }

    ol,
    ul,
    li {
        list-style : none;
    }

    h1,
    h2,
    h3,
    h4 {
        color          : var(--color-title);
        font-family    : 'Mulish', ui-sans-serif, Arial, sans-serif;
        letter-spacing : -1px;
    }

    h2 {
        &.lined {
            &:before {
                display    : inline-block;
                margin     : 0 20px 8px 0;
                height     : 3px;
                content    : " ";
                background : var(--color-primary-light);
                width      : 17%;
            }

            &:after {
                display    : inline-block;
                margin     : 0 0 8px 20px;
                height     : 3px;
                content    : " ";
                background : var(--color-primary-light);
                width      : 17%;
            }
        }

        span {
            color : var(--color-primary);
        }
    }

    h1 {
        font-weight   : 600;
        font-size     : 40px;
        margin-bottom : 30px;
    }

    h2 {
        font-weight : 600;
        position    : relative;
        font-size   : 36px;
        line-height : 38px;
    }

    h3 {
        font-weight : 400;
        font-size   : 27px;
    }

    h4 {
        font-weight : 300;
        font-size   : 22px;
    }

    p {
        color       : var(--color-text);
        line-height : 1.5rem;
        font-size   : 16px;
    }

    a {
        text-decoration : none;
        font-size       : 16px;
    }

    @media(max-width:576px) {
        h1 {
            font-size : 36px !important;
        }

        h2 {
            font-size : 30px !important;
        }
    }
`;

export default GlobalStyles;