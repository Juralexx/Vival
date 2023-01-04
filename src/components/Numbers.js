import React from "react";
import Image from 'next/image'
import CountUp from 'react-countup';
import { Revealer } from '../tools/animations'

const Numbers = () => {
    return (
        <div className="in-numbers container"  id="in-numbers">
            <h2>En quelques chiffres</h2>
            <div className="row in-numbers-container">
                <Revealer className="col-10 col-sm-8 col-md-6 col-lg-4 number">
                    <Image src="/img/numbers/number1.png" alt="" width="60" height="60" />
                    <p className="number-title"><span><CountUp end={6} duration={1} /></span> ans d'expérience</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor.
                    </p>
                </Revealer>

                <Revealer delay={300} className="col-10 col-sm-8 col-md-6 col-lg-4 number">
                    <Image src="/img/numbers/number2.png" alt="" width="60" height="60" />
                    <p className="number-title"><span><CountUp end={1200} duration={1} /></span>+ références</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor.
                    </p>
                </Revealer>

                <Revealer delay={400} className="col-10 col-sm-8 col-md-6 col-lg-4 number">
                    <Image src="/img/numbers/number3.png" alt="" width="60" height="60" />
                    <p className="number-title"><span><CountUp end={100} duration={1} /></span>% de client satisfait</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor.
                    </p>
                </Revealer>
            </div>
        </div>
    )
}

export default Numbers