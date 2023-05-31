import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon = new L.divIcon({
    className: '',
    iconSize: [35, 57],
    popupAnchor: [0, -20],
    html: `<img src="/././img/marker.png" height="57" width="35" />`
});

const MyMarker = (props) => {
    const leafletRef = React.useRef();
    React.useEffect(() => {
        leafletRef.current.openPopup();
    }, [])
    return <Marker ref={leafletRef} {...props} />
}

const LeafletMap = ({ datas }) => {
    return (
        <Leaflet className="leaflet-map">
            <MapContainer
                center={[46.24487374917036, 5.349809049206242]}
                zoom={17}
                minZoom={6}
                maxZoom={18}
                dragging={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url='https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
                />
                <MyMarker position={[datas.latitude, datas.longitude]} icon={icon}>
                    <Popup className="map-popup">
                        <img src="/././img/logo.png" alt={datas.denomination} />
                        <p>
                            <strong>{datas.job}</strong>
                        </p>
                        <a href={datas.googlemap} target="_blank" className="contact-link" rel="noreferrer">
                            {datas.street}<br />{datas.postcode} {datas.city}
                        </a>
                    </Popup>
                </MyMarker>
            </MapContainer>
        </Leaflet>
    )
}

export default LeafletMap

const Leaflet = styled.div`
    height : 100%;
    width  : 100%;

    .leaflet-container {
        height : 100%;
        width  : 100%;
    }

    .leaflet-map {
        height : 100%;
    }

    .leaflet-top {
        display : none;
    }

    .leaflet-popup-tip-container {
        display : none;
    }

    .leaflet-popup-content-wrapper {
        border-radius : var(--rounded-lg);
        box-shadow    : var(--shadow-2xl);
    }

    .leaflet-attribution-flag {
        display : none;
    }

    .leaflet-bottom {
        .leaflet-control-attribution {
            display : none;
        }
    }

    .leaflet-layer {
        filter : grayscale(1);
    }

    .leaflet-popup-content {
        margin     : 22px 40px 16px 40px !important;
        text-align : center;
        width      : 210px !important;

        img {
            max-width : 150px;
            margin    : 0 auto 12px;
        }

        p {
            margin    : 10px 0 3px !important;
            font-size : 18px;
        }

        a {
            color       : var(--text) !important;
            font-weight : 500;
            white-space : nowrap;

            &:hover {
                color : var(--primary) !important;
            }
        }
    }
`