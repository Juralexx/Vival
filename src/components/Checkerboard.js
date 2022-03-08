import React from 'react'
import Navlink from '../tools/Navlink'
import { FaShoppingBasket, FaLeaf, FaSnowflake } from 'react-icons/fa'

const Checkerboard = () => {
    return (
        <>
            <div className="checkerboard-modern checkerboard-modern-1">
                <div className="checkerboard-container">
                    <div className="text col-12 col-sm-6 col-md-6 col-lg-5">
                        <h2>Titre du métier</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                            quis sem. Nulla consequat massa quis enim ex.</p>

                        <Navlink href="#" className="btn btn-primary">En savoir plus <FaShoppingBasket /></Navlink>
                    </div>

                    <div className="image col-12 col-sm-6 col-md-6 col-lg-7">
                        <img className="img-big img-fluid" src="././img/checkerboard/checkerboard-1.jpg" alt="" />
                        <img className="img-small img-fluid" src="././img/checkerboard/checkerboard-7.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="checkerboard-modern checkerboard-modern-2">
                <div className="checkerboard-container">
                    <div className="image col-12 col-sm-6 col-md-6 col-lg-7">
                        <div className="background"></div>
                        <img className="img-fluid" src="././img/checkerboard/checkerboard-2.jpg" alt="" />
                    </div>

                    <div className="text col-12 col-sm-6 col-md-6 col-lg-5">
                        <h2>Titre du métier</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                            quis sem. Nulla consequat massa quis enim ex.</p>

                        <Navlink href="#" className="btn btn-primary">En savoir plus <FaLeaf /></Navlink>
                    </div>
                </div>
            </div>

            <div className="checkerboard-modern checkerboard-modern-3">
                <div className="checkerboard-container">
                    <div className="text col-12 col-sm-6 col-md-6 col-lg-5">
                        <h2>Titre du métier</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                            quis sem. Nulla consequat massa quis enim ex.</p>

                        <Navlink href="#" className="btn btn-primary">En savoir plus <FaSnowflake /></Navlink>
                    </div>

                    <div className="image col-12 col-sm-6 col-md-6 col-lg-7">
                        <img className="img-fluid" src="././img/checkerboard/checkerboard-6.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkerboard