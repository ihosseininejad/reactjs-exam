import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { MAP_ROUTE } from '../../api/apiRoutes';
import { Icon, LatLngBoundsExpression, LatLngExpression, LeafletEvent } from 'leaflet';
import LocationPicker from './LocationPicker';
import 'leaflet/dist/leaflet.css'
import { isZeroZero } from '../../utils/helperFunctions';
import LeafletIcon from './Marker';



const MapBox: React.FC<{ source: LatLngExpression, destination: LatLngExpression, coordinates: [number, number], setCoordinates: any, activeState: number }>
    = ({ source, destination, coordinates, setCoordinates, activeState }) => {

        const bounds: LatLngBoundsExpression | undefined = [
            [25.078237, 44.034138], // جنوب غربی - Southwest
            [39.781681, 63.317776] // شمال شرقی - Northeast
        ];

        const SourceIcon = LeafletIcon("https://img.icons8.com/?size=256&id=12229&format=png")

        const DestinationIcon = LeafletIcon("https://img.icons8.com/?size=80&id=EV9b51iBnUs9&format=png")

        return (
            <MapContainer
                style={{ height: "100vh", width: "100vw" }}
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
                    (isZeroZero(source) || isZeroZero(destination))
                    && <Marker
                        position={coordinates}
                        icon={isZeroZero(source) ? SourceIcon : DestinationIcon}>
                    </Marker>
                }
                {
                    (activeState == 1 || !isZeroZero(source)) && <Marker position={source} icon={SourceIcon}></Marker>
                }
                {
                    (activeState == 2 || !isZeroZero(destination)) && <Marker position={destination} icon={DestinationIcon}></Marker>
                }

                <LocationPicker setCoordinates={setCoordinates} />

            </MapContainer>
        );
    };

export default MapBox;
