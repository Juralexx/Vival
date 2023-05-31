import React from "react";
import { Revealer } from 'tools/Revealer'
import Icon from '../components/icons/Icon'
import FacebookCard from "components/FacebookCard";

export default function Informations({ datas }) {
    return (
        <div className="av-informations-section section">
            <h2>Informations</h2>
            <div className="av-informations-section-inner container-lg">
                <Revealer>
                    <div className="av-information adress">
                        <h4>Adresse</h4>
                        <a href={datas.googlemap} target="_blank" rel="noreferrer">
                            {datas.street}<br />{datas.postcode} {datas.city}
                        </a>
                    </div>
                    <div className="av-information mt-8">
                        <h4>Contact</h4>
                        <a href={"tel:" + datas.phone}>
                            {datas.phone}
                        </a>
                    </div>
                    <div className="mt-7">
                        <FacebookCard datas={datas} />
                    </div>
                </Revealer>
                <Revealer delay={300}>
                    <div className="av-information">
                        <h4>Horaires</h4>
                        <div>
                            {datas.opening.map((el, key) => {
                                return (
                                    <p className="opening" key={key}>
                                        <span>{el.day ? el.day : ''}</span><span className="divider"></span>{el.range ? el.range : ''}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </Revealer>
                <Revealer delay={400}>
                    <div className='av-payment-items'>
                        <h4>Moyens de paiements</h4>
                        <div className='flex justify-center md-to-xl:flex-col xs:flex-col'>
                            <div className='av-payment-item'>
                                <div className='flex items-center justify-center'>
                                    <Icon className="cb" name="CB" />
                                    <Icon className="visa" name="Visa" />
                                    <Icon className="mastercard" name="Mastercard" />
                                </div>
                                <p>Carte bancaire à&nbsp;partir&nbsp;de&nbsp;1€</p>
                            </div>
                            <div className='av-payment-item'>
                                <Icon className='money' name="Money" />
                                <p>Espèces</p>
                            </div>
                        </div>
                    </div>
                </Revealer>
            </div>
        </div>
    )
}