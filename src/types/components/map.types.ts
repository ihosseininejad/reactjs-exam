import { LatLngExpression } from "leaflet";
import { Option } from "./form/autocomplete-types";

export interface MapBoxProps {
    source: LatLngExpression;
    destination: LatLngExpression;
    coordinates: [number, number];
    setCoordinates: any;
    activeState: number;
}

export interface LocationPickerProps {
    setCoordinates: (coordinate: [number, number]) => void;
}

export interface ActionBoxProps {
    activeState: number;
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    vehicle: number;
    setVehicle: (value: number) => void;
    onClickHandler: () => void;
    loading: boolean;
    source: LatLngExpression;
    destination: LatLngExpression;
}

export interface MarkerDetailsProps {
    source: LatLngExpression;
    destination: LatLngExpression;
}