import { Icon } from "leaflet";

const LeafletIcon = (url: string) => new Icon({
    iconUrl: url,
    iconRetinaUrl: url,
    iconSize: [35, 35],
    iconAnchor: [22, 94]
});

export default LeafletIcon;