import React, { useState } from "react";
import { BsFillClockFill, BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";
import Modal from '../tools/Modal'
import datas from '../../data/datas.json'

const HeaderSlim = ({ image }) => {
    const [openHours, setOpenHours] = useState(false)

    return (
        <div className="slider-slim" id="header" style={{ backgroundImage: image ? `url(${image})` : 'url(/././img/slider-not-main.jpg)' }}>
            <div className="slider-slim-container">
                <div className="slider-slim-encart">
                    <div className="py-1">
                        <div className="slogan"><p><strong>{datas.slogan}<br />à&nbsp;<span>{datas.city}</span></strong></p></div>
                    </div>
                    <div className="py-1">
                        <div className="slider-infos"><a href={datas.googlemap} target="_blank"><FaMapMarkerAlt /> {datas.adress}</a></div>
                        <div className="slider-infos"><a href={"tel:" + datas.phone}><BsTelephoneFill /> {datas.phone}</a></div>
                        <div className="modal-btn-container">
                            <a href={"mailto:" + datas.mail} className="modal-btn modal-mail-btn"><FaEnvelope /></a>
                            <div className="modal-btn modal-hour-btn" onClick={() => setOpenHours(!openHours)}><BsFillClockFill /></div>
                            <a href={"https://www.facebook.com/" + datas.facebook} target="_blank" className="modal-btn"><FaFacebookF /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={openHours} setOpen={setOpenHours}>
                <p className="modal-title">Heures d'ouverture</p>
                {datas.opening.map((el, key) => {
                    return (
                        <p className="text-center" key={key}>
                            <span className="font-bold">{el.day ? el.day : ''} : </span>{el.hours ? el.hours : ''}
                        </p>
                    )
                })}
            </Modal>
        </div>
    )
}

export default HeaderSlim