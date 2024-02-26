import { useMapEvents } from 'react-leaflet';
import { LocationPickerProps } from '../../types/components/map.types';

export default function LocationPicker({ setCoordinates }: LocationPickerProps) {
    const map = useMapEvents({
        move() {
            const { lat, lng } = map.getCenter()
            setCoordinates([lat, lng])
        }
    })
    return null
}
