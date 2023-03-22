import React from "react"
import Brands from "components/Brands"
import Map from "components/map/Map"
import Parallax from "components/Parallax"
import ContactBar from "components/ContactBar"

const ActualityLayout = ({ children, datas }) => {
    return (
        datas &&
        <React.Fragment>
            {children}
            <ContactBar
                datas={datas}
            />
            <Parallax />
            <Brands />
            <Map
                datas={datas}
            />
        </React.Fragment>
    )
}
export default ActualityLayout