import React from "react";
import dynamic from 'next/dynamic'
import styled from "styled-components";

const LeafletMap = dynamic(() => import('./LeafletMap'), {
    ssr: false,
})

const Map = ({ datas }) => {
    return (
        <MapContainer id="map">
            <h2>Nous trouver</h2>
            <div className="map">
                <LeafletMap datas={datas} />
            </div>
        </MapContainer>
    )
}

export default Map

const MapContainer = styled.div`
    width   : 100%;
    padding : 50px 0 0 0;

    .map {
        width         : 85%;
        min-height    : 450px;
        margin        : 0 auto;
        box-shadow    : var(--shadow-two);
        border-radius : var(--rounded-xl);
        overflow      : hidden;

        .leaflet-container {
            height        : 550px;
        }

        @media(max-width: 992px) {
            width : 92%;
        }
        @media(max-width: 576px) {
            width         : 100%;
            border-radius : 0;
        }
    }

    h2 {
        text-align    : center;
        margin-bottom : 30px;
    }
`