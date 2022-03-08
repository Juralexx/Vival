import React from 'react'
import { BsTelephoneFill, BsFillClockFill } from 'react-icons/bs'
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF } from 'react-icons/fa'

const Header = () => {
    return (
        <div className="slider">
            <div className="slider-container">
                <div className="slider-encart">
                    <div className="info-first"><p>Depuis 2016</p></div>
                    <div className="slogan"><p>Épicerie | Tabac | Presse<br />à&nbsp;<span>Meillonnas</span></p></div>
                    {/* <div className="slider-btn">
                        <a href="#" className="btn btn-primary xs-mr-10">Contactez-nous</a>
                        <a href="#" className="btn btn-primary">Localisez-nous</a>
                    </div> */}
                    <div className="modal-btn-container">
                        <div className="modal-btn modal-phone-btn"><BsTelephoneFill /></div>
                        <div className="modal-btn modal-mail-btn"><FaEnvelope /></div>
                        <div className="modal-btn modal-map-btn"><FaMapMarkerAlt /></div>
                        <div className="modal-btn modal-hour-btn"><BsFillClockFill /></div>
                        <div className="modal-btn"><FaFacebookF /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header