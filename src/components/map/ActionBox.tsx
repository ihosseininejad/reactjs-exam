import AutoComplete from '../form/AutoComplete'
import Button from '../form/Button'
import { DestinationMarker, HomeMarker } from '../../utils/iconPack';
import { Option } from '../../types/types';
import { isZeroZero, splitCoordinates } from '../../utils/helperFunctions';
import { LatLngExpression } from 'leaflet';
import '../../styles/components/action-box.scss'
import { useEffect } from 'react';

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

    useEffect(()=>{
        console.log(vehicle, activeState);
        
    }, [activeState, vehicle])
    return (
        <>
            <div className='action-box'>
                <div className='row'>
                    {activeState == 2 
                    && <AutoComplete loading={vehicleIsLoading} options={options} vehicle={vehicle} setVehicle={setVehicle} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    }
                    <Button variant='filled' label={activeState == 0 ? 'ثبت مبدا' : activeState == 1 ? 'ثبت مقصد' : activeState == 2 ? 'ثبت درخواست' : 'بدون متن'} disabled={activeState == 2 && !vehicle} onClick={onClickHandler} loading={loading} />
                </div>
                <div className='row'>
                    <p>
                        <HomeMarker size={30} />
                        مبـــــدا : {splitCoordinates(source)}</p>
                    {!isZeroZero(source) && <p>
                        <DestinationMarker size={30} />
                        مقصد : {splitCoordinates(destination)}</p>}
                </div>
            </div>

            <div className='mobile-coordinates'>
                <p>
                    <HomeMarker size={30} />
                    مبـــــدا : {splitCoordinates(source)}</p>
                    {!isZeroZero(source) &&<p>
                    <DestinationMarker size={30} />
                    مقصد : {splitCoordinates(destination)}</p>}
            </div>
        </>
    )
}