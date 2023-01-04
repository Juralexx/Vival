import React from "react"
import Brands from "../components/Brands"
import HeaderSlim from "../components/HeaderSlim"
import Map from "../components/Map"
import Numbers from "../components/Numbers"
import Parallax from "../components/Parallax"

export default function Actuality({ children, image }) {

    return (
        <>
            <HeaderSlim image={image ? image : ''} />
            <div className="actualites-page-container container" id="actualites-page-container">
                {children}
            </div>
            <Numbers />
            <Parallax />
            <Brands />
            <Map />
        </>
    )
}