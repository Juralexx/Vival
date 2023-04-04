import React from "react";
import Image from 'next/image'
import styled from "styled-components";
import { Revealer } from "tools/Revealer";

const Images = ({ title, images }) => {
    return (
        <ImagesContainer className="container-lg" id="images">
            <h2>{title}</h2>
            <div className="images">
                {images.map((img, i) => {
                    return (
                        <Revealer delay={i * 50} className="col-12 col-sm-4 col-lg-3" key={i}>
                            <Image src={img} alt="" className="brand-img" width="250" height="100" />
                        </Revealer>
                    )
                })}
            </div>
        </ImagesContainer>
    )
}

export default Images

const ImagesContainer = styled.div`
    padding : 50px 0;

    h2 {
        margin-bottom : 40px;
        text-align    : center;
    }

    .images {
        display         : flex;
        justify-content : center;
        width           : auto;
        max-width       : 1500px;
        height          : auto;
        margin          : 0 auto;
        padding         : 0;
        flex-wrap       : wrap;

        div {
            display         : flex;
            justify-content : center;
            padding         : 10px;
            min-height      : 180px;

            .brand-img {
                object-fit : contain;
                width      : 100%;
                max-width  : 220px;
                height     : auto;
                max-height : 170px;
            }
        }

        @media(min-width:577px) and (max-width: 768px) {
            div {
                margin : 0 auto;
                .brand-img {
                    max-width : 160px;
                }
            }
        }

        @media(max-width:576px) {
            div {
                .brand-img {
                    max-width : 220px;
                }
            }
        }
    }
`