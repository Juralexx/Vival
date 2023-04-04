import React from "react"
import Images from "components/Images"
import Parallax from "components/Parallax"
import Informations from "components/Informations"
import Contact from "components/Contact"
import Numbers from "components/Numbers"

const ActualityLayout = ({ children, datas, brands, partners }) => {
    return (
        datas &&
        <React.Fragment>
            {children}
            <Informations
                datas={datas}
            />
            <Parallax />
            <Numbers
                datas={datas}
            />
            <Images
                title="Nos Partenaires"
                images={partners}
            />
            <Images
                title="Nos Marques"
                images={brands}
            />
            <Contact
                datas={datas}
            />
        </React.Fragment>
    )
}
export default ActualityLayout