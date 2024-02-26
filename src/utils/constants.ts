import { LatLngBoundsExpression } from "leaflet";

export const reducerCases = {
    SHOW_TOAST: "SHOW_TOAST",
    HIDE_TOAST: "HIDE_TOAST"
}

export const defaultToastTime = 4000;

export const boundsMap: LatLngBoundsExpression = [
    [25.078237, 44.034138], // Southwest
    [39.781681, 63.317776] // Northeast
]

export const defaultCoordinates: [number, number] = [29.60860914023545, 52.531155865995615]