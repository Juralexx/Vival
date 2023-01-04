import React from 'react'
import Link from "next/link";
import { Revealer } from '../tools/animations'

const CheckerboardModern = () => {
    return (
        <>
            <div className="checkerboard-unstructured checkerboard-unstructured-1" id="checkerboard-unstructured-1">
                <div className="checkerboard-container">
                    <div className="text col-12 col-sm-12 col-md-6 col-lg-5">
                        <Revealer delay={200} className="w-full">
                            <h2><Link href="#">Titre du métier</Link></h2>
                        </Revealer>
                        <Revealer delay={300}>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                quis sem. Nulla consequat massa quis enim ex.</p>
                        </Revealer>
                        <Revealer delay={400} className="mr-auto lg:mr-0 lg:ml-auto">
                            <Link href="#" className="btn btn-primary">En savoir plus</Link>
                        </Revealer>
                    </div>

                    <div className="image col-12 col-sm-12 col-md-6 col-lg-7">
                        <img className="img-big" src="././img/checkerboard/checkerboard-1.jpg" alt="" />
                        <img className="img-small" src="././img/checkerboard/checkerboard-7.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="checkerboard-unstructured checkerboard-unstructured-2" id="checkerboard-unstructured-2">
                <div className="checkerboard-container">
                    <div className="image col-12 col-sm-12 col-md-6 col-lg-7">
                        <div className="background"></div>
                        <img src="././img/checkerboard/checkerboard-2.jpg" alt="" />
                    </div>

                    <div className="text col-12 col-sm-12 col-md-6 col-lg-5">
                        <Revealer delay={200} className="w-full">
                            <h2><Link href="#">Titre du métier</Link></h2>
                        </Revealer>
                        <Revealer delay={300} className="w-full">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                quis sem. Nulla consequat massa quis enim ex.</p>
                        </Revealer>
                        <Revealer delay={400} className="ml-auto lg:ml-0 lg:mr-auto">
                            <Link href="#" className="btn btn-primary">En savoir plus</Link>
                        </Revealer>
                    </div>
                </div>
            </div>

            <div className="checkerboard-unstructured checkerboard-unstructured-3" id="checkerboard-unstructured-3">
                <div className="checkerboard-container">
                    <div className="text col-12 col-sm-12 col-md-6 col-lg-5">
                        <Revealer delay={200} className="w-full">
                            <h2><Link href="#">Titre du métier</Link></h2>
                        </Revealer>
                        <Revealer delay={300}>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                quis sem. Nulla consequat massa quis enim ex.</p>
                        </Revealer>
                        <Revealer delay={400} className="mr-auto lg:mr-0 lg:ml-auto">
                            <Link href="#" className="btn btn-primary">En savoir plus</Link>
                        </Revealer>
                    </div>

                    <div className="image col-12 col-sm-12 col-md-6 col-lg-7">
                        <img src="././img/checkerboard/checkerboard-6.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckerboardModern