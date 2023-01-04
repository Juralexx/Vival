import React from 'react'
import Link from "next/link";
import { getImg } from '../tools/Utils'
import { Revealer } from '../tools/animations'

const Checkerboard = () => {
    return (
        <div className="checkerboard container-lg" id="checkerboard">
            <div className='row'>
                <div className="image befored col-12 col-sm-12 col-md-4 " style={getImg('././img/checkerboard/checkerboard-1.jpg')}></div>
                <div className="text col-12 col-sm-12 col-md-8">
                    <Revealer>
                        <h2><Link href="#">Titre du métier</Link></h2>
                    </Revealer>
                    <Revealer delay={300}>
                        <p>Et licet quocumque oculos flexeris feminas adfatim multas spectare cirratas, quibus,
                            si nupsissent, per aetatem ter iam nixus poterat suppetere liberorum,
                            ad usque taedium pedibus pavimenta tergentes iactari volucriter gyris,
                            dum exprimunt innumera simulacra, quae finxere fabulae theatrales.</p>
                    </Revealer>
                    <Revealer delay={400}>
                        <Link href="#" className="btn btn-primary">En savoir plus</Link>
                    </Revealer>
                </div>
            </div>

            <div className='row'>
                <div className="image befored col-12 col-sm-12 col-md-4" style={getImg('././img/checkerboard/checkerboard-3.jpg')}></div>
                <div className="text order-2 md:order-1 col-12 col-sm-12 col-md-8">
                    <Revealer>
                        <h2><Link href="#">Titre du métier</Link></h2>
                    </Revealer>
                    <Revealer delay={300}>
                        <p>Et licet quocumque oculos flexeris feminas adfatim multas spectare cirratas,
                            quibus, si nupsissent, per aetatem ter iam nixus poterat suppetere liberorum,
                            ad usque taedium pedibus pavimenta tergentes iactari volucriter gyris,
                            dum exprimunt innumera simulacra, quae finxere fabulae theatrales.</p>
                    </Revealer>
                    <Revealer delay={400} className="ml-auto">
                        <Link href="#" className="btn btn-primary">En savoir plus</Link>
                    </Revealer>
                </div>
            </div>

            <div className='row'>
                <div className="image befored col-12 col-sm-12 col-md-4" style={getImg('././img/checkerboard/checkerboard-4.jpg')}></div>
                <div className="text col-12 col-sm-12 col-md-8">
                    <Revealer>
                        <h2><Link href="#">Titre du métier</Link></h2>
                    </Revealer>
                    <Revealer delay={300}>
                        <p>Et licet quocumque oculos flexeris feminas adfatim multas spectare cirratas,
                            quibus, si nupsissent, per aetatem ter iam nixus poterat suppetere liberorum,
                            ad usque taedium pedibus pavimenta tergentes iactari volucriter gyris,
                            dum exprimunt innumera simulacra, quae finxere fabulae theatrales.</p>
                    </Revealer>
                    <Revealer delay={400}>
                        <Link href="#" className="btn btn-primary">En savoir plus</Link>
                    </Revealer>
                </div>
            </div>
        </div>
    )
}

export default Checkerboard