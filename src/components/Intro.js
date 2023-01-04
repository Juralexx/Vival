import React from 'react'
import datas from '../../data/datas.json'
import { Revealer } from '../tools/animations'

const Intro = () => {
    return (
        <div className="presentation" id="presentation">
            <div className="presentation-container">
                <Revealer className="logo">
                    <img
                        src="/././img/logo.png"
                        alt={`${datas.denomination} - ${datas.slogan} à ${datas.city}`}
                        title={`${datas.denomination} - ${datas.slogan} à ${datas.city}`}
                    />
                </Revealer>

                <Revealer delay={300} className="text">
                    <h1>{datas.denomination}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                        quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    </p>
                </Revealer>
            </div>
        </div>
    )
}

export default Intro