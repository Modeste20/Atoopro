import React, { useLayoutEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import './../../../../../node_modules/leaflet/dist/leaflet.css'
import './Map.css'
import { MarkerContactMap } from './MarkerContactMap/MarkerContactMap'

const position = [44.8776877, -0.6036164]

/* Utilisation de réact-leaflet pour la carte */


const Map = () => {

    /* Suppression des informations qui sont en bas de la carte  */

    useLayoutEffect(() => {
        const elmt = document.querySelector('.leaflet-container .leaflet-control-attribution')

        if (elmt) {
            elmt.style.display = 'none'
        }
    }, [])


    return (
        <div className="map-google">
            <MapContainer placeholder className='google-map' style={{ height: '100% !important' }} center={position} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={MarkerContactMap} >
                    <Popup>
                        <h2>Atoo Pro</h2>
                        <p>1 Rue des Acacias 33520 à Bruges en France</p>
                    </Popup>
                    <Tooltip className='tool-tip-marker' direction='right' opacity={1} permanent>
                        <h3>{'ATOO PRO'}</h3>
                    </Tooltip>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map