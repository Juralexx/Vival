import React, { useState } from 'react'
import { BsTelephoneFill, BsFillClockFill } from 'react-icons/bs'
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF } from 'react-icons/fa'
import Modal from '../tools/Modal'
import datas from '../../data/datas.json'
import { Revealer } from '../tools/animations'

const Header = () => {
    const [openHours, setOpenHours] = useState(false)
    return (
        <div className="slider" id="header">
            <div className="slider-container">
                <div className="slider-encart">
                    <Revealer element="div" delay={600} origin='left'>
                        <div className="info-first"><p>{datas.since}</p></div>
                    </Revealer>
                    <Revealer element="div" delay={200} origin='bottom'>
                        <div className="slogan"><p>{datas.slogan}<br />à&nbsp;<span>{datas.city}</span></p></div>
                    </Revealer>
                    <Revealer element="div" delay={300}>
                        <div className='sub-slogan'><p>{datas.subslogan}</p></div>
                    </Revealer>
                    <Revealer element="div" delay={400}>
                        <div className="slider-infos"><a href={datas.googlemap} target="_blank"><FaMapMarkerAlt /> {datas.adress}</a></div>
                    </Revealer>
                    <Revealer element="div" delay={500}>
                        <div className="slider-infos"><a href={"tel:" + datas.phone}><BsTelephoneFill /> {datas.phone}</a></div>
                    </Revealer>
                    <Revealer element="div" delay={700}>
                        <div className="modal-btn-container">
                            <a href={"mailto:" + datas.mail} className="modal-btn modal-mail-btn"><FaEnvelope /></a>
                            <div className="modal-btn modal-hour-btn" onClick={() => setOpenHours(!openHours)}><BsFillClockFill /></div>
                            <a href={"https://www.facebook.com/" + datas.facebook} target="_blank" className="modal-btn"><FaFacebookF /></a>
                        </div>
                    </Revealer>
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

export default Header