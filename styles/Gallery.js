import { css } from "styled-components";

export const Gallery = css`
    .gallery-brick {
        position      : relative;
        overflow      : hidden;
        width         : 100%;
        border-radius : var(--rounded-sm);

        &:hover {
            .gallery-img {
                transform  : scale(1.1);
                transition : .3s ease;
            }
        }

        .gallery-img {
            transition : .3s ease;
            width      : 100%;
            height     : auto;
        }

        .caption {
            position           : absolute;
            bottom             : 0;
            background         : rgba(255, 255, 255, 0.8);
            width              : 100%;
            height             : auto;
            padding            : 5px;
            text-overflow      : ellipsis;
            overflow           : hidden;
            width              : 100%;
            display            : -webkit-box;
            -webkit-line-clamp : 2;
            -webkit-box-orient : vertical;
        }
    }

    /**
    *   Classic gallery
    */

    .classic-gallery {
        display               : grid;
        grid-template-columns : 1fr 1fr 1fr;
        grid-gap              : 20px;

        .classic-gallery-brick {
            height   : 300px;
            overflow : hidden;

            img {
                width      : 100% !important;
                height     : 100%;
                object-fit : cover;
            }
        }
    }

    @media(max-width:390px) {
        .classic-gallery {
            grid-template-columns : 1fr;
            grid-gap              : 12px;
        }
    }

    @media (min-width:391px) and (max-width: 768px) {
        .classic-gallery {
            grid-template-columns : 1fr 1fr;
            grid-gap              : 12px;
        }
    }

    /**
    *   Masonry gallery
    */

    .masonry {
        transition    : all .5s ease-in-out;
        column-gap    : 20px;
        column-fill   : initial;
        margin-bottom : 50px;
        
        .masonry-brick {
            margin-bottom  : 20px;
            display        : inline-block;
            vertical-align : top;
            cursor         : pointer;
        }
    }

    @media(max-width:390px) {
        .masonry {
            column-count : 1;
            column-gap    : 12px;
            .masonry-brick {
                margin-bottom : 12px;
            }
        }
    }

    @media (min-width:391px) and (max-width: 768px) {
        .masonry {
            column-count  : 2;
            column-gap    : 12px;
            .masonry-brick {
                margin-bottom : 12px;
            }
        }
    }

    @media (min-width: 769px) {
        .masonry {
            column-count : 3;
        }
    }
`