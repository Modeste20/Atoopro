import L from 'leaflet';
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import icon from './../../../../../File/images/marker-icon.png'

const MarkerContactMap = new L.Icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: icon,
    shadowUrl: iconShadow
});

export { MarkerContactMap };