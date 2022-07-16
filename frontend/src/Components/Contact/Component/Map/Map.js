import React, { useLayoutEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import './Map.css'
import './../../../../../node_modules/leaflet/dist/leaflet.css'
import { MarkerContactMap } from './MarkerContactMap/MarkerContactMap'

const position = [44.87, -0.6]

/* Utilisation de réact-leaflet pour la carte */


const Map = () => {

    return (
        <div className="map-google">
            {/*<MapContainer placeholder className='google-map' center={position} zoom={15}>{/* scrollWheelZoom={false}>
                <Marker position={position}>
                    <Popup>
                        <h2>Atoo Pro</h2>
                        <p>1 Rue des Acacias 33520 à Bruges en France</p>
                    </Popup>
                    <Tooltip className='tool-tip-marker' direction='right' opacity={1} permanent>
                        <h3>{'ATOO PRO'}</h3>
                    </Tooltip>
                </Marker>
            </MapContainer>*/}

            <MapContainer center={position} className='google-map' zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={MarkerContactMap}>
                    <Popup>
                        <h2>Atoo Pro</h2>
                        <p>1 Rue des Acacias 33520 à Bruges en France</p>
                    </Popup>
                    <Tooltip className='tool-tip-marker' direction='right' opacity={1} permanent>
                        {/*<h4 style={{fontSize:'10px !important',fontWeight:'800 !important'}}>ATOO PRO</h4>*/}
                    </Tooltip>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map