import React from "react";
import { Revealer } from 'tools/Revealer'
import Icon from "tools/icons/Icon";

const Numbers = ({ datas }) => {
    return (
        <div className="av-numbers-container" id="in-numbers">
            <div className="container-lg">
                <h2>En quelques chiffres</h2>
                <div className="av-numbers">
                    <Revealer className="av-number">
                        <div className="icon-container">
                            <Icon name="Medal" />
                        </div>
                        <p className="av-number-title">
                            <span>7</span> ans <br /> d'expérience
                        </p>
                        <p>Votre épicerie Vival Meillonnas est ouverte depuis 2016.</p>
                    </Revealer>
                    <Revealer delay={300} className="av-number">
                        <div className="icon-container">
                            <Icon name="ShoppingBasket" />
                        </div>
                        <p className="av-number-title">
                            <span>1200</span >+ <br /> références
                        </p>
                        <p>Un large choix de produits de qualité, frais et de saison.</p>
                    </Revealer>
                    <Revealer delay={400} className="av-number">
                        <div className="icon-container">
                            <Icon name="Percent" />
                        </div>
                        <p className="av-number-title">
                            <span>98</span>% <br /> de client satisfait
                        </p>
                        <p>Basé sur les <a href='https://bit.ly/3Ts2d7L' target='_blank' rel="noreferrer" className="custom-link">avis Google</a>.</p>
                    </Revealer>
                    <Revealer delay={500} className="av-number">
                        <div className="img-container">
                            <img src='/img/meilleure-chaine-de-magasins-2023.jpg' />
                        </div>
                        <p className="av-number-title">
                            Meilleure chaine de<br /> magasin de l'année
                        </p>
                        <p>Vival a été élus meilleure chaine de magasins de l'année 2023, catégorie «&nbsp;Commerces&nbsp;de&nbsp;proximité&nbsp;»</p>
                    </Revealer>
                </div>
            </div>
        </div>
    )
}

export default Numbers;