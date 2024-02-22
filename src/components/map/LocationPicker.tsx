import { useMapEvents } from 'react-leaflet';

type Props = {
    setCoordinates: (coordinate: [number, number]) => void;
}

export default function LocationPicker({ setCoordinates }: Props) {
    const map = useMapEvents({
        move() {
            const { lat, lng } = map.getCenter()
            setCoordinates([lat, lng])
        },
        /* click() {
                const { lat, lng } = map.getCenter()
                setCoordinates([lat, lng])
            } */
    })
    return null
}
