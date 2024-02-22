import Autocomplete from '../form/AutoComplete'
import Button from '../form/Button'
import { DestinationMarker, HomeMarker } from '../../utils/IconPack';
import { Option } from '../../types/types';
import { splitLatLng } from '../../utils/helperFunctions';
import { LatLngExpression } from 'leaflet';

type Props = {
    vehicleIsLoading: boolean,
    activeState: number,
    options: Array<Option>,
    vehicle: number,
    setVehicle: (value: number) => void,
    searchTerm: string,
    setSearchTerm: (value: string) => void,
    onClickHandler: () => void,
    loading: boolean,
    source: LatLngExpression,
    destination: LatLngExpression
}

export default function ActionBox({ vehicleIsLoading, activeState, options, vehicle, setVehicle, searchTerm, setSearchTerm, onClickHandler, loading, source, destination }: Props) {

    return (
        <>
            <div className='row'>
                <Autocomplete loading={vehicleIsLoading} options={options} vehicle={vehicle} setVehicle={setVehicle} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <Button label={activeState == 0 ? 'ثبت مبدا' : activeState == 1 ? 'ثبت مقصد' : activeState == 2 ? 'ثبت درخواست' : 'بدون متن'} disabled={activeState == 2 && !vehicle} onClick={onClickHandler} loading={loading} />
            </div>
            <div className='row'>
                <p>
                    <HomeMarker size={30} />
                    مبـــــدا : {splitLatLng(source)}</p>
                <p>
                    <DestinationMarker size={30} />
                    مقصد : {splitLatLng(destination)}</p>
            </div>

            <div className='mobile-cordinates'>
                <p>
                    <HomeMarker size={30} />
                    مبـــــدا : {splitLatLng(source)}</p>
                <p>
                    <DestinationMarker size={30} />
                    مقصد : {splitLatLng(destination)}</p>
            </div>
        </>
    )
}