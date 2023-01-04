import React from "react";
import dynamic from 'next/dynamic'
import datas from "../../data/datas.json"

const LeafletMap = dynamic(() => import('./LeafletMap'), {
    ssr: false,
})

const Map = () => {
    return (
        <div className="map-container" id="map">
            <h2>Nous trouver</h2>
            <div className="map">
                <LeafletMap datas={datas} />
            </div>
        </div>
    )
}

export default Map