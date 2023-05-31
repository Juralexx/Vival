import React from "react";
import Image from 'next/image'
import { Revealer } from "tools/Revealer";

const Images = ({ title, images }) => {
    return (
        <div className="av-images-grid container-xl" id="images">
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
        </div>
    )
}

export default Images;