import { useEffect, useState } from 'react';
import { useStateProvider } from '../../context/StateContext';
import { reducerCases } from '../../utils/constants';
import { getTextByActiveState } from '../../utils/helperFunctions';
import useToken from '../../hooks/useToken';
import useFetch from '../../hooks/useFetch';
import { SEARCH_VEHICLE } from '../../api/apiRoutes';

import AutoComplete from '../form/AutoComplete/Index'
import Button from '../form/Button'
import MarkerDetails from './MarkerDetails';

import { Option } from '../../types/components/form/autocomplete-types';
import { ActionBoxProps } from '../../types/components/map.types';
import { IApiResponse } from '../../types/hooks/usefetch.types';
import '../../styles/components/action-box.scss'


export default function ActionBox({ activeState, searchTerm, setSearchTerm, vehicle, setVehicle, onClickHandler, loading, source, destination }: ActionBoxProps) {
    const [urlState, setUrlState] = useState('')
    const [options, setOptions] = useState<Option[]>([]);
    const [{ }, dispatch] = useStateProvider()

    const userToken = useToken()

    const [vehicleResponse, isLoading, error,] = useFetch<IApiResponse>("GET", {
        url: urlState,
        autoFetch: true
    })

    useEffect(() => {
        if (searchTerm.length > 1) {
            setUrlState(SEARCH_VEHICLE(searchTerm, userToken))
        }
    }, [searchTerm])

    useEffect(() => {
        if (!isLoading && vehicleResponse) {
            if (vehicleResponse.status) {
                setOptions(vehicleResponse.data)
            }
        } else if (!isLoading && error) {
            dispatch({
                type: reducerCases.SHOW_TOAST,
                payload: {
                    type: 'error',
                    title: 'برای اینکه!',
                    message: "مشکلی از سمت سرور پیش آمده است!"
                }
            })
        }
    }, [isLoading])

    return (
        <>
            <div className='action-box'>
                <div className='row'>
                    {activeState == 2
                        && <AutoComplete
                            loading={isLoading}
                            options={options}
                            vehicle={vehicle}
                            setVehicle={setVehicle}
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm} />
                    }
                    <Button
                        variant='filled'
                        label={getTextByActiveState(activeState)}
                        disabled={activeState == 2 && !vehicle}
                        onClick={onClickHandler}
                        loading={loading} />
                </div>
                <div className='row'>
                    <MarkerDetails source={source} destination={destination} />
                </div>
            </div>

            <div className='mobile-coordinates'>
                <MarkerDetails source={source} destination={destination} />
            </div>
        </>
    )
}