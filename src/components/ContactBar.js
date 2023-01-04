import React from "react";
import { FaFacebook } from 'react-icons/fa'
import { BsTelephoneFill, BsFillClockFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import datas from '../../data/datas.json'
import { Revealer } from '../tools/animations'

const ContactBar = () => {
    return (
        <div className="contact-bar" id="contact-bar">
            <h2>Nous contacter</h2>
            <ul className="row">
                <li className="col-12 col-md-6 col-lg-6 col-xl-4">
                    <Revealer>
                        <h3>Adresse</h3>
                        <a href={datas.googlemap} target="_blank" className="contact-link"><FaMapMarkerAlt className="contact-link-svg" />{datas.street}<br />{datas.postcode} {datas.city}</a>
                        <h3 className="mt-7">Contact</h3>
                        <a href={"tel:" + datas.phone} className="contact-link"><BsTelephoneFill className="contact-link-svg" />{datas.phone}</a>
                    </Revealer>
                </li>
                <li className="col-12 col-md-6 col-lg-6 col-xl-4">
                    <h3>Horaires</h3>
                    <Revealer delay={300} className="flex">
                        <BsFillClockFill className="contact-link-svg" />
                        <div>
                            {datas.opening.map((el, key) => {
                                return (
                                    <p className="text-center" key={key}>
                                        <span className="font-bold">{el.day ? el.day : ''} : </span>{el.hours ? el.hours : ''}
                                    </p>
                                )
                            })}
                        </div>
                    </Revealer>
                </li>
                <li className="col-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-0 md:mt-10 xl:mt-0">
                    <Revealer delay={400} className="socials-barre">
                        <a href={"https://www.facebook.com/" + datas.facebook} target="_blank"><FaFacebook /></a>
                        <a href={"https://www.facebook.com/" + datas.facebook} target="_blank">Suivez-nous sur<br /> <span>Facebook</span> !</a>
                    </Revealer>
                </li>
            </ul>
        </div>
    )
}

export default ContactBar