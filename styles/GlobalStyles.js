import { createGlobalStyle } from 'styled-components';
import variablesColors from './variablesColors';
import variablesConfig from './variablesConfig';
import { TarteAuCitronCard, TarteAuCitronPanel } from './TarteAuCitron';
import { Loaders } from './Loader';
import { CKEditor } from './CKEditor';
import { Gallery } from './Gallery';

const GlobalStyles = createGlobalStyle`
    ${variablesColors}
    ${variablesConfig}
    ${TarteAuCitronCard}
    ${TarteAuCitronPanel}
    ${Loaders}
    ${CKEditor}
    ${Gallery}

    html {
        position        : relative;
        margin          : 0;
        padding         : 0;
        overflow-x      : hidden;
        scroll-behavior : smooth;
        font-size       : 18px;
    }

    * {
        margin     : 0;
        padding    : 0;
        box-sizing : border-box;
    }

    body {
        width            : 100%;
        min-height       : 100vh;
        margin           : 0;
        padding          : 0;
        background-color : var(--body);
        font-family      : var(--font-fam1), var(--font-fam-list);
        scroll-behavior  : smooth;
        overflow         : hidden;
    }

    ::selection {
        background-color : rgba(var(--primary-rgb), 0.2);
        color            : var(--primary);
    }

    :focus {
        outline        : 2px dashed var(--primary);
        outline-offset : 3px;
    }

    :focus-visible {
        outline        : 2px dashed var(--primary);
        outline-offset : 3px;
    }

    :focus:not(:focus-visible) {
        outline        : none;
        outline-offset : 0px;
    }

    ::-webkit-scrollbar {
        width  : 8px;
        height : 10px;
    }
    ::-webkit-scrollbar-button {
        width  : 0px;
        height : 0px;
    }
    ::-webkit-scrollbar-thumb {
        background    : #c1c1c1;
        border        : 31px none #c1c1c1;
        border-radius : 6px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background : var(--primary-light);
    }
    ::-webkit-scrollbar-thumb:active {
        background : var(--primary-light);
    }
    ::-webkit-scrollbar-track {
        background    : var(--body);
        border        : 1px solid var(--body);
        border-radius : 5px;
        width         : 5px;
    }
    ::-webkit-scrollbar-track:hover {
        background : transparent;
    }
    ::-webkit-scrollbar-track:active {
        background : transparent;
    }
    ::-webkit-scrollbar-corner {
        background : transparent;
    }

    input {
        &:-webkit-autofill,
        &:-webkit-autofill:focus {
            transition: background-color 600000s 0s, color 600000s 0s;
        }
    }

    .main,
    .unmain {
        min-height     : 100vh;
        display        : flex;
        flex-direction : column;
    }

    main {
        flex     : 1;
        position : relative;
    }

    .unmain {
        h1 {
            text-align : center;
        }

        #navbar {
            @media(min-width :1201px) {
                background : var(--body);
                /* background : linear-gradient(to left, rgba(255, 255, 255, 1) 45%, rgba(255, 255, 255, 0) 75%); */
            }
            @media(max-width : 1200px) {
                background : var(--body);
            }
        }
    }

    ol,
    ul,
    li {
        list-style : none;
        color      : var(--text);
    }

    p {
        color       : var(--text);
        font-size   : 18px;
        line-height : 1.5;
    }

    a {
        text-decoration : none;
        font-size       : 18px;

        &.custom-link {
            position : relative;
            color    : var(--primary);
            &:hover {
                &:before {
                    content    : '';
                    position   : absolute;
                    bottom     : -2px;
                    width      : 100%;
                    height     : 2px;
                    background : var(--primary-light);
                }
            }
        }
    }

    @media(max-width: 768px) {
        a, p {
            font-size : 16px;
        }
    }

    small {
        color       : var(--text);
        font-size   : 13px;
        line-height : 1.2;
    }

    h1,
    h2,
    h3,
    h4 {
        color          : var(--title);
        letter-spacing : -1px;

        * {
            font-size      : inherit;
            line-height    : inherit;
            color          : inherit;
            font-stretch   : inherit;
            letter-spacing : inherit;
        }
    }

    h1 {
        font-weight   : 600;
        font-size     : 2.4rem;
        line-height   : 1.4;
        margin-bottom : 30px;
    }

    h2 {
        font-weight : 600;
        position    : relative;
        line-height : 1.4;
        font-size   : 2.1rem;
    }

    h3 {
        font-weight : 400;
        font-size   : 1.8rem;
        line-height : 1.6;
    }

    h4 {
        font-weight : 300;
        font-size   : 22px;
        font-size   : 24px;
        line-height : 1.6;
    }

    @media(max-width: 768px) {
        h1 {
            font-size : 32px;
        }

        h2 {
            font-size : 28px;
        }

        h3 {
            font-size : 24px;
        }
    }

    .list-styled {
        color      : var(--text);
        list-style : unset;
        li {
            list-style : unset;
        }
    }

    .highlight {
        color : var(--primary);
    }

    .no-results-big {
        display         : flex;
        flex-direction  : column;
        justify-content : center;
        align-items     : center;
        padding         : 40px 0;
        font-size       : 18px;

        svg {
            width            : 50px;
            height           : auto;
            padding          : 10px;
            border-radius    : var(--rounded-md);
            color            : var(--primary);
            background-color : rgba(var(--primary-rgb), 0.1);
            margin-bottom    : 20px;
        }

        span {
            font-size   : 24px;
            font-weight : 600;
        }

        button {
            margin-top : 20px;
        }
    }

    .opening {
        margin-bottom   : 6px;
        display         : flex;
        align-items     : center;
        justify-content : space-between;

        .divider {
            flex-grow     : 1;
            border-bottom : 1px solid var(--light-border);
            margin        : 10px;
            min-width     : 5px;
        }

        span {
            font-weight : 600;
            color       : var(--dark);
        }
    }
`;

export default GlobalStyles;