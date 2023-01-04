import React from "react";
import Image from 'next/image'
import { Revealer } from "../tools/animations";

const Brands = () => {
    return (
        <div className="brand-container container-lg" id="brands">
            <h2>Nos marques</h2>
            <div className="brands">
                <Revealer delay={100} className="col-12 col-sm-4 col-lg-3"><Image src="/img/brands/brand1.jpg" alt="" className="brand-img" width="250" height="100" /></Revealer>
                <Revealer delay={150} className="col-12 col-sm-4 col-lg-3"><Image src="/img/brands/brand2.jpg" alt="" className="brand-img" width="250" height="100" /></Revealer>
                <Revealer delay={200} className="col-12 col-sm-4 col-lg-3"><Image src="/img/brands/brand3.jpg" alt="" className="brand-img" width="250" height="100" /></Revealer>
                <Revealer delay={250} className="col-12 col-sm-4 col-lg-3"><Image src="/img/brands/brand4.jpg" alt="" className="brand-img" width="250" height="100" /></Revealer>
                <Revealer delay={300} className="col-12 col-sm-4 col-lg-3"><Image src="/img/brands/brand5.jpg" alt="" className="brand-img" width="250" height="100" /></Revealer>
                <Revealer delay={350} className="col-12 col-sm-4 col-lg-3"><Image src="/img/brands/brand6.jpg" alt="" className="brand-img" width="250" height="100" /></Revealer>
                <Revealer delay={400} className="col-12 col-sm-4 col-lg-3"><Image src="/img/brands/brand7.jpg" alt="" className="brand-img" width="250" height="100" /></Revealer>
                <Revealer delay={450} className="col-12 col-sm-4 col-lg-3"><Image src="/img/brands/brand8.jpg" alt="" className="brand-img" width="250" height="100" /></Revealer>
                <Revealer delay={500} className="col-12 col-sm-4 col-lg-3"><Image src="/img/brands/brand9.jpg" alt="" className="brand-img" width="250" height="100" /></Revealer>
                <Revealer delay={550} className="col-12 col-sm-4 col-lg-3"><Image src="/img/brands/brand10.jpg" alt="" className="brand-img" width="250" height="100" /></Revealer>
                <Revealer delay={600} className="col-12 col-sm-4 col-lg-3"><Image src="/img/brands/brand11.jpg" alt="" className="brand-img" width="250" height="100" /></Revealer>
            </div>
        </div>
    )
}

export default Brands