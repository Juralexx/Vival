import React from 'react'

const Intro = () => {
    return (
        <div className="presentation">
            <div className="presentation-container">
                <div className="logo wow bounceInLeft">
                    <img src="././img/logo.png" className="img-fluid" alt="Vival - Meillonnas" />
                </div>

                <div className="text">
                    <h1 className="wow fadeInRight" data-wow-delay="0.4s">Nom de l'entreprise - Ville</h1>
                    <p className="wow fadeInRight" data-wow-delay="0.8s">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                        quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro