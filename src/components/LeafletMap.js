import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon = new L.divIcon({
    className: '',
    iconSize: [35, 57],
    popupAnchor: [0,-20],
    html: `<img src="/././img/marker.png" height="57" width="35" />`
});

const MyMarker = (props) => {
    const leafletRef = useRef();
    useEffect(() => {
        leafletRef.current.openPopup();
    }, [])
    return <Marker ref={leafletRef} {...props} />
}

const LeafletMap = ({ datas }) => {
    return (
        <MapContainer
            center={[46.24487374917036, 5.349809049206242]}
            zoom={17}
            minZoom={6}
            maxZoom={18}
            dragging={true}
            style={{ width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url='https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
            />
            <MyMarker position={[datas.latitude, datas.longitude]} icon={icon}>
                <Popup className="map-popup">
                    <img src="/././img/logo.png" alt={datas.denomination} />
                    <p><strong>{datas.slogan}</strong></p>
                    <a href={datas.googlemap} target="_blank" className="contact-link">{datas.street}<br />{datas.postcode} {datas.city}</a>
                </Popup>
            </MyMarker>
        </MapContainer>
    )
}

export default LeafletMap