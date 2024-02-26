import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { MAP_ROUTE } from '../../api/apiRoutes';
import LocationPicker from './LocationPicker';
import { isZeroZero } from '../../utils/helperFunctions';
import LeafletIcon from './Marker';

import 'leaflet/dist/leaflet.css'
import { LatLngBoundsExpression } from 'leaflet';
import { MapBoxProps } from '../../types/components/map.types';

const MapBox: React.FC<MapBoxProps> = ({ source, destination, coordinates, setCoordinates, activeState }) => {

    const bounds: LatLngBoundsExpression = [
        [25.078237, 44.034138], // Southwest
        [39.781681, 63.317776] // Northeast
    ];

    const SourceIcon = LeafletIcon("https://img.icons8.com/?size=256&id=12229&format=png")

    const DestinationIcon = LeafletIcon("https://img.icons8.com/?size=80&id=EV9b51iBnUs9&format=png")

    return (
        <MapContainer
            className='map-box'
            center={coordinates}
            zoom={12}
            minZoom={5}
            maxZoom={18}
            maxBounds={bounds}
            scrollWheelZoom={true}
            doubleClickZoom={true}
            fadeAnimation

        >
            <TileLayer
                url={MAP_ROUTE}
            />

            {
                /* source maker */
                (activeState == 0 || !isZeroZero(source))
                && <Marker
                    position={isZeroZero(source)
                        ? coordinates
                        : source}
                    icon={SourceIcon}
                ></Marker>
            }

            
            {
                /* destination maker */
                (activeState == 1 || !isZeroZero(destination))
                && <Marker
                    position={isZeroZero(destination)
                        ? coordinates
                        : destination}
                    icon={DestinationIcon}
                ></Marker>
            }

            <LocationPicker setCoordinates={setCoordinates} />

        </MapContainer>
    );
};

export default MapBox;