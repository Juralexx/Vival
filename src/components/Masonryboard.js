import React from 'react'

const Masonryboard = () => {
    function getImg(props) {
        return ({
            backgroundImage: `url(${props})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
        })
    }

    return (
        <div className="masonry-checkerboard">
            <ul>
                <li className="image col-12 col-sm-12 col-md-4 col-lg-8" style={getImg('../../public/img/checkerboard/checkerboard-1.jpg')}>&nbsp;</li>

                <li className="text col-12 col-sm-12 col-md-8 col-lg-4">
                    <h2>Titre du damier</h2>
                    <p>Et licet quocumque oculos flexeris feminas adfatim multas spectare cirratas, quibus, si nupsissent, per aetatem ter iam nixus poterat suppetere liberorum, ad usque taedium pedibus pavimenta tergentes iactari volucriter gyris, dum exprimunt innumera simulacra, quae finxere fabulae theatrales.</p>
                    <a href="#" className="btn btn-primary">Métier</a>
                </li>

                <li className="image col-12 col-sm-12 col-md-8 col-lg-4 none" style={getImg('./../../public/img/checkerboard/checkerboard-2.jpg')}>&nbsp;</li>

                <li className="text col-12 col-sm-12 col-md-8 col-lg-4">
                    <h2>Titre du damier</h2>
                    <p>Et licet quocumque oculos flexeris feminas adfatim multas spectare cirratas, quibus, si nupsissent, per aetatem ter iam nixus poterat suppetere liberorum, ad usque taedium pedibus pavimenta tergentes iactari volucriter gyris, dum exprimunt innumera simulacra, quae finxere fabulae theatrales.</p>
                    <a href="#" className="btn btn-primary">Métier</a>
                </li>

                <li className="image col-12 col-sm-12 col-md-4 col-lg-4" style={getImg('../../public/img/checkerboard/checkerboard-3.jpg')}>&nbsp;</li>

                <li className="text col-12 col-sm-12 col-md-8 col-lg-4">
                    <h2>Titre du damier</h2>
                    <p>Et licet quocumque oculos flexeris feminas adfatim multas spectare cirratas, quibus, si nupsissent, per aetatem ter iam nixus poterat suppetere liberorum, ad usque taedium pedibus pavimenta tergentes iactari volucriter gyris, dum exprimunt innumera simulacra, quae finxere fabulae theatrales.</p>
                    <a href="#" className="btn btn-primary">Métier</a>
                </li>

                <li className="image col-12 col-sm-12 col-md-4 col-lg-8" style={getImg('../../public/img/checkerboard/checkerboard-4.jpg')}>&nbsp;</li>
            </ul>
        </div>
    )
}

export default Masonryboard