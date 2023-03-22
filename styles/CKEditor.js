import { css } from "styled-components";

export const CKEditor = css`
    :root {
        --ck-color-image-caption-background : hsl(0, 0%, 97%);
        --ck-color-image-caption-text       : hsl(0, 0%, 20%);
        --ck-color-mention-background       : hsla(341, 100%, 30%, 0.1);
        --ck-color-mention-text             : hsl(341, 100%, 30%);
        --ck-color-table-caption-background : hsl(0, 0%, 97%);
        --ck-color-table-caption-text       : hsl(0, 0%, 20%);
        --ck-highlight-marker-blue          : hsl(201, 97%, 72%);
        --ck-highlight-marker-green         : hsl(120, 93%, 68%);
        --ck-highlight-marker-pink          : hsl(345, 96%, 73%);
        --ck-highlight-marker-yellow        : hsl(60, 97%, 73%);
        --ck-highlight-pen-green            : hsl(112, 100%, 27%);
        --ck-highlight-pen-red              : hsl(0, 85%, 49%);
        --ck-image-style-spacing            : 3em;
        --ck-inline-image-style-spacing     : calc(var(--ck-image-style-spacing) / 2);
        --ck-todo-list-checkmark-size       : 16px;
    }

    .ck-content > :first-child:not(figure) {
      margin-top  : 0;
      padding-top : 0;
    }
    
    .ck-content h1 {
        padding-top   : 0.6em;
        margin-bottom : 0.6em;
    }
    .ck-content h2 {
        padding-top   : 0.6em;
        margin-bottom : 0.4em;
        font-weight   : inherit;
    }
    .ck-content h3 {
        padding-top   : 0.6em;
        margin-bottom : 0.4em;
        font-weight   : 400;
    }
    .ck-content h4 {
        margin-bottom : 0.1em;
        font-weight   : 400;
    }
    .ck-content p {
        font-size     : 1em;
        line-height   : 1.6em;
        padding-top   : 0.2em;
        margin-bottom : 1.2em;
    }
    .ck-content strong,
    .ck-content b {
        font-weight : 600;
    }
    .ck-content ul,
    .ck-content ol {
        list-style    : initial;
        margin-left   : 32px;
        margin-bottom : 1.2em;
    }
    .ck-content ul.todo-list {
        list-style  : none;
        margin      : revert;
        color       : revert;
        font-family : revert;
        margin-left : 32px;
    }
    .ck-content a {
        color : var(--primary);
    }
    .ck-content iframe {
        margin : 20px auto;
    }
    .ck-content sub {
        vertical-align : sub
    }
    .ck-content sup {
        vertical-align : super
    }
        /* ckeditor5-block-quote/theme/blockquote.css */
    .ck-content blockquote {
        overflow      : hidden;
        padding-right : 1.5em;
        padding-left  : 1.5em;
        margin        : 1.5em 0;
        margin-left   : 0;
        margin-right  : 0;
        font-style    : italic;
        border-left   : solid 5px hsl(0, 0%, 80%);
    }
    .ck-content blockquote p {
        margin : 0;
    }
        /* ckeditor5-block-quote/theme/blockquote.css */
    .ck-content[dir="rtl"] blockquote {
        border-left  : 0;
        border-right : solid 5px hsl(0, 0%, 80%);
    }
        /* ckeditor5-basic-styles/theme/code.css */
    .ck-content code {
        background-color : hsla(0, 0%, 78%, 0.3);
        padding          : .15em;
        border-radius    : 2px;
    }
        /* ckeditor5-font/theme/fontsize.css */
    .ck-content .text-tiny {
        font-size : .7em;
    }
        /* ckeditor5-font/theme/fontsize.css */
    .ck-content .text-small {
        font-size : .85em;
    }
        /* ckeditor5-font/theme/fontsize.css */
    .ck-content .text-big {
        font-size : 1.4em;
    }
        /* ckeditor5-font/theme/fontsize.css */
    .ck-content .text-huge {
        font-size : 1.8em;
    }
        /* ckeditor5-highlight/theme/highlight.css */
    .ck-content .marker-yellow {
        background-color : var(--ck-highlight-marker-yellow);
    }
        /* ckeditor5-highlight/theme/highlight.css */
    .ck-content .marker-green {
        background-color : var(--ck-highlight-marker-green);
    }
        /* ckeditor5-highlight/theme/highlight.css */
    .ck-content .marker-pink {
        background-color : var(--ck-highlight-marker-pink);
    }
        /* ckeditor5-highlight/theme/highlight.css */
    .ck-content .marker-blue {
        background-color : var(--ck-highlight-marker-blue);
    }
        /* ckeditor5-highlight/theme/highlight.css */
    .ck-content .pen-red {
        color            : var(--ck-highlight-pen-red);
        background-color : transparent;
    }
        /* ckeditor5-highlight/theme/highlight.css */
    .ck-content .pen-green {
        color            : var(--ck-highlight-pen-green);
        background-color : transparent;
    }
        /* ckeditor5-image/theme/image.css */
    .ck-content .image {
        display    : table;
        text-align : center;
        margin     : 15px auto;
        min-width  : 50px;
    }
        /* ckeditor5-image/theme/image.css */
    .ck-content .image img {
        display   : block;
        margin    : 20px auto;
        max-width : 100%;
        min-width : 100%;
    }
        /* ckeditor5-image/theme/image.css */
    .ck-content .image-inline {
            /*
        * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).;
        * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
        * This strange behavior does not happen with inline-flex.
        */
        display     : inline-flex;
        max-width   : 100%;
        align-items : flex-start;
    }
        /* ckeditor5-image/theme/image.css */
    .ck-content .image-inline picture {
        display : flex;
    }
        /* ckeditor5-image/theme/image.css */
    .ck-content .image-inline picture,
    .ck-content .image-inline img {
        flex-grow   : 1;
        flex-shrink : 1;
        max-width   : 100%;
    }
        /* ckeditor5-image/theme/imageresize.css */
    .ck-content .image_resized {
        float         : left;
        margin-right  : 30px;
        margin-bottom : 20px;

        @media(min-width: 577px) and (max-width: 992px) {
            min-width : 45%;
        }
        @media(max-width: 576px) {
            float     : none;
            min-width : 100%;
            margin    : 30px auto;
        }
    }
    .ck-content .image.image_resized {
        max-width  : 100%;
        display    : block;
        box-sizing : border-box;
        /* margin-top    : 0;
        margin-bottom : 0; */

        @media(min-width: 577px) and (max-width: 992px) {
            min-width : 45%;
        }
        @media(max-width: 576px) {
            float     : none;
            min-width : 100%;
            margin    : 30px auto;
        }
    }
        /* ckeditor5-image/theme/imageresize.css */
    .ck-content .image.image_resized img {
        width  : 100%;
        margin : 0;
    }
        /* ckeditor5-image/theme/imageresize.css */
    .ck-content .image.image_resized > figcaption {
        display : block;
    }
        /* ckeditor5-image/theme/imagecaption.css */
    .ck-content .image > figcaption {
        display          : table-caption;
        caption-side     : bottom;
        word-break       : break-word;
        color            : var(--ck-color-image-caption-text);
        background-color : var(--ck-color-image-caption-background);
        padding          : .6em;
        font-size        : .75em;
        outline-offset   : -1px;
    }
        /* ckeditor5-image/theme/imagestyle.css */
    .ck-content .image-style-block-align-left,
    .ck-content .image-style-block-align-right {
        max-width : calc(100% - var(--ck-image-style-spacing));
    }
        /* ckeditor5-image/theme/imagestyle.css */
    .ck-content .image-style-align-left,
    .ck-content .image-style-align-right {
        clear : none;
    }
        /* ckeditor5-image/theme/imagestyle.css */
    .ck-content .image-style-side {
        float       : right;
        margin-left : var(--ck-image-style-spacing);
        max-width   : 50%;
    }
        /* ckeditor5-image/theme/imagestyle.css */
    .ck-content .image-style-align-left {
        float        : left;
        margin-right : var(--ck-image-style-spacing);
    }
        /* ckeditor5-image/theme/imagestyle.css */
    .ck-content .image-style-align-center {
        margin-left  : auto;
        margin-right : auto;
    }
        /* ckeditor5-image/theme/imagestyle.css */
    .ck-content .image-style-align-right {
        float       : right;
        margin-left : var(--ck-image-style-spacing);
    }
        /* ckeditor5-image/theme/imagestyle.css */
    .ck-content .image-style-block-align-right {
        margin-right : 0;
        margin-left  : auto;
    }
        /* ckeditor5-image/theme/imagestyle.css */
    .ck-content .image-style-block-align-left {
        margin-left  : 0;
        margin-right : auto;
    }
        /* ckeditor5-image/theme/imagestyle.css */
    .ck-content p + .image-style-align-left,
    .ck-content p + .image-style-align-right,
    .ck-content p + .image-style-side {
        margin-top : 0;
    }
        /* ckeditor5-image/theme/imagestyle.css */
    .ck-content .image-inline.image-style-align-left,
    .ck-content .image-inline.image-style-align-right {
        margin-top    : var(--ck-inline-image-style-spacing);
        margin-bottom : var(--ck-inline-image-style-spacing);
    }
        /* ckeditor5-image/theme/imagestyle.css */
    .ck-content .image-inline.image-style-align-left {
        margin-right : var(--ck-inline-image-style-spacing);
    }
        /* ckeditor5-image/theme/imagestyle.css */
    .ck-content .image-inline.image-style-align-right {
        margin-left : var(--ck-inline-image-style-spacing);
    }
        /* ckeditor5-language/theme/language.css */
    .ck-content span[lang] {
        font-style : italic;
    }
        /* ckeditor5-media-embed/theme/mediaembed.css */
    .ck-content .media {
        clear     : both;
        margin    : 0.9em 0;
        display   : block;
        min-width : 15em;
    }
        /* ckeditor5-list/theme/todolist.css */
    .ck-content .todo-list {
        list-style : none;
    }
        /* ckeditor5-list/theme/todolist.css */
    .ck-content .todo-list li {
        margin-bottom : 5px;
    }
        /* ckeditor5-list/theme/todolist.css */
    .ck-content .todo-list li .todo-list {
        margin-top : 5px;
    }
        /* ckeditor5-list/theme/todolist.css */
    .ck-content .todo-list .todo-list__label > input {
        -webkit-appearance : none;
        display            : inline-block;
        position           : relative;
        width              : var(--ck-todo-list-checkmark-size);
        height             : var(--ck-todo-list-checkmark-size);
        vertical-align     : middle;
        border             : 0;
        left               : -25px;
        margin-right       : -15px;
        right              : 0;
        margin-left        : 0;
    }
        /* ckeditor5-list/theme/todolist.css */
    .ck-content .todo-list .todo-list__label > input::before {
        display       : block;
        position      : absolute;
        box-sizing    : border-box;
        content       : '';
        width         : 100%;
        height        : 100%;
        border        : 1px solid hsl(0, 0%, 20%);
        border-radius : 4px;
        transition    : 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;
    }
        /* ckeditor5-list/theme/todolist.css */
    .ck-content .todo-list .todo-list__label > input::after {
        display        : block;
        position       : absolute;
        box-sizing     : content-box;
        pointer-events : none;
        content        : '';
        left           : calc( var(--ck-todo-list-checkmark-size) / 3 );
        top            : calc( var(--ck-todo-list-checkmark-size) / 5.3 );
        width          : calc( var(--ck-todo-list-checkmark-size) / 5.3 );
        height         : calc( var(--ck-todo-list-checkmark-size) / 2.6 );
        border-style   : solid;
        border-color   : transparent;
        border-width   : 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
        transform      : rotate(45deg);
    }
        /* ckeditor5-list/theme/todolist.css */
    .ck-content .todo-list .todo-list__label > input[checked]::before {
        background   : var(--primary);
        border-color : var(--primary);
    }
        /* ckeditor5-list/theme/todolist.css */
    .ck-content .todo-list .todo-list__label > input[checked]::after {
        border-color : hsl(0, 0%, 100%);
    }
        /* ckeditor5-list/theme/todolist.css */
    .ck-content .todo-list .todo-list__label .todo-list__label__description {
        vertical-align : middle;
    }
        /* ckeditor5-page-break/theme/pagebreak.css */
    .ck-content .page-break {
        position        : relative;
        clear           : both;
        padding         : 5px 0;
        display         : flex;
        align-items     : center;
        justify-content : center;
    }
        /* ckeditor5-page-break/theme/pagebreak.css */
    .ck-content .page-break::after {
        content       : '';
        position      : absolute;
        border-bottom : 2px dashed hsl(0, 0%, 77%);
        width         : 100%;
    }
        /* ckeditor5-page-break/theme/pagebreak.css */
    .ck-content .page-break__label {
        position            : relative;
        z-index             : 1;
        padding             : .3em .6em;
        display             : block;
        text-transform      : uppercase;
        border              : 1px solid hsl(0, 0%, 77%);
        border-radius       : 2px;
        font-family         : Helvetica, Arial, Tahoma, Verdana, Sans-Serif;
        font-size           : 0.75em;
        font-weight         : bold;
        color               : hsl(0, 0%, 20%);
        background          : hsl(0, 0%, 100%);
        box-shadow          : 2px 2px 1px hsla(0, 0%, 0%, 0.15);
        -webkit-user-select : none;
        -moz-user-select    : none;
        -ms-user-select     : none;
        user-select         : none;
    }
        /* ckeditor5-table/theme/tablecaption.css */
    .ck-content .table > figcaption {
        display          : table-caption;
        caption-side     : top;
        word-break       : break-word;
        text-align       : center;
        color            : var(--ck-color-table-caption-text);
        background-color : var(--ck-color-table-caption-background);
        padding          : .6em;
        font-size        : .75em;
        outline-offset   : -1px;
    }
        /* ckeditor5-table/theme/table.css */
    .ck-content .table {
        margin  : 0.9em auto;
        display : table;
    }
        /* ckeditor5-table/theme/table.css */
    .ck-content .table table {
        border-collapse : collapse;
        border-spacing  : 0;
        width           : 100%;
        height          : 100%;
        border          : 1px double hsl(0, 0%, 70%);
    }
        /* ckeditor5-table/theme/table.css */
    .ck-content .table table td,
    .ck-content .table table th {
        min-width : 2em;
        padding   : .4em;
        border    : 1px solid hsl(0, 0%, 75%);
    }
        /* ckeditor5-table/theme/table.css */
    .ck-content .table table th {
        font-weight : bold;
        background  : hsla(0, 0%, 0%, 5%);
    }
        /* ckeditor5-table/theme/table.css */
    .ck-content[dir="rtl"] .table th {
        text-align : right;
    }
        /* ckeditor5-table/theme/table.css */
    .ck-content[dir="ltr"] .table th {
        text-align : left;
    }
        /* ckeditor5-code-block/theme/codeblock.css */
    .ck-content pre {
        padding       : 1em;
        color         : hsl(0, 0%, 20.8%);
        background    : hsla(0, 0%, 78%, 0.3);
        border        : 1px solid hsl(0, 0%, 77%);
        border-radius : 2px;
        text-align    : left;
        direction     : ltr;
        tab-size      : 4;
        white-space   : pre-wrap;
        font-style    : normal;
        min-width     : 200px;
    }
        /* ckeditor5-code-block/theme/codeblock.css */
    .ck-content pre code {
        background    : unset;
        padding       : 0;
        border-radius : 0;
    }
        /* ckeditor5-horizontal-line/theme/horizontalline.css */
    .ck-content hr {
        margin     : 15px 0;
        height     : 4px;
        background : hsl(0, 0%, 87%);
        border     : 0;
    }
        /* ckeditor5-mention/theme/mention.css */
    .ck-content .mention {
        background : var(--ck-color-mention-background);
        color      : var(--ck-color-mention-text);
    }
    @media print {
            /* ckeditor5-page-break/theme/pagebreak.css */
        .ck-content .page-break {
            padding : 0;
        }
            /* ckeditor5-page-break/theme/pagebreak.css */
        .ck-content .page-break::after {
            display : none;
        }
    }
`