import React, { useLayoutEffect } from 'react'
import * as FaIcons from 'react-icons/fa'
import {MapContainer,TileLayer,Marker,Popup,Tooltip} from 'react-leaflet'
import './../../../../../node_modules/leaflet/dist/leaflet.css'
import './Map.css'
import { MarkerContactMap } from './MarkerContactMap/MarkerContactMap'

const position = [44.8776877, -0.6036164]


const Map = () => {

    useLayoutEffect(() => {
        const elmt = document.querySelector('.leaflet-container .leaflet-control-attribution')

        if (elmt) {
            elmt.style.display = 'none'
        }
    }, [])


    return (
        <div className="map-google">
                {/*<iframe width="100%" height="100%" frameBorder="0" allowFullScreen src="//umap.openstreetmap.fr/fr/map/siege_723331?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=false&tilelayersControl=false&embedControl=false&datalayersControl=false&onLoadPanel=undefined&captionBar=false&locateControl=false&measureControl=false&editinosmControl=false"></iframe>
            */}
                <MapContainer placeholder className='google-map' style={{height:'100% !important'}} center={position} zoom={15} scrollWheelZoom={false}>
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