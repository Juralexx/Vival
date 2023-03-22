import React from "react";
import Image from 'next/image'
import styled from "styled-components";
import { Revealer } from "tools/Revealer";

const Brands = () => {
    const nbOfImgs = 11

    return (
        <BrandsContainer className="container-lg" id="brands">
            <h2>Nos marques</h2>
            <div className="brands">
                {[...new Array(nbOfImgs)].map((_, i) => {
                    return (
                        <Revealer delay={i * 50} className="col-12 col-sm-4 col-lg-3" key={i}>
                            <Image src={`/img/brands/brand${i + 1}.jpg`} alt="" className="brand-img" width="250" height="100" />
                        </Revealer>
                    )
                })}
            </div>
        </BrandsContainer>
    )
}

export default Brands

const BrandsContainer = styled.div`
    padding          : 50px 0;

    h2 {
        margin-bottom : 40px;
        text-align    : center;
    }

    .brands {
        display   : flex;
        width     : auto;
        max-width : 1500px;
        height    : auto;
        margin    : 0 auto;
        padding   : 0;
        flex-wrap : wrap;

        div {
            display         : flex;
            justify-content : center;
            padding         : 10px;

            .brand-img {
                object-fit : contain;
                max-width  : 200px;
                width      : 100%;
                height     : auto;
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