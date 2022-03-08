import React from 'react'
import { FaShoppingBasket, FaLeaf, FaNewspaper, FaSnowflake } from 'react-icons/fa'
import { GiFruitBowl } from 'react-icons/gi'
import Navlink from '../tools/Navlink'

const Bricks = () => {
    return (
        <div className="brick">
            <div className="brick-container">
                <div className="inner-brick-container">
                    <div className="inner-brick wow fadeInLeft">
                        <Navlink href="#">
                            <div className="brick-icon">
                                <FaShoppingBasket />
                            </div>
                            <span>Lorem ispum dolor</span>
                        </Navlink>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo</p>
                    </div>
                </div>

                <div className="inner-brick-container">
                    <div className="inner-brick wow fadeInUp">
                        <Navlink href="#">
                            <div className="brick-icon">
                                <FaLeaf />
                            </div>
                            <span>Lorem ispum dolor</span>
                        </Navlink>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo</p>
                    </div>
                </div>

                <div className="inner-brick-container">
                    <div className="inner-brick wow fadeInRight">
                        <Navlink href="#">
                            <div className="brick-icon">
                                <FaNewspaper />
                            </div>
                            <span>Lorem ispum dolor</span>
                        </Navlink>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo</p>
                    </div>
                </div>
                <div className="inner-brick-container">
                    <div className="inner-brick wow fadeInLeft">
                        <Navlink href="#">
                            <div className="brick-icon">
                                <GiFruitBowl />
                            </div>
                            <span>Lorem ispum dolor</span>
                        </Navlink>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo</p>
                    </div>
                </div>

                <div className="inner-brick-container">
                    <div className="inner-brick wow fadeInRight">
                        <Navlink href="#">
                            <div className="brick-icon">
                                <FaSnowflake />
                            </div>
                            <span>Lorem ispum dolor</span>
                        </Navlink>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bricks