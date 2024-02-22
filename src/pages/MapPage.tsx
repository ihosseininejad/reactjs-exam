import { useContext, useEffect, useState } from 'react'
import MapBox from '../components/map/MapBox'
import { LatLngExpression } from 'leaflet'
import useFetch from '../hooks/useFetch'
import { ACCEPT_REQUEST_ROUTE, SEARCH_VEHICLE } from '../api/apiRoutes'
import useToken from '../hooks/useToken'
import { ToastContext, ToastContextType } from '../context/ToastContext'
import { IApiResponse, Option } from '../types/types'
import '../styles/map-page.scss'
import ActionBox from '../components/map/ActionBox'
import { splitLatLng } from '../utils/helperFunctions'

export default function MapPage() {
  const [source, setSource] = useState<LatLngExpression>([0, 0])
  const [destination, setDestination] = useState<LatLngExpression>([0, 0])
  const [vehicle, setVehicle] = useState(0)
  const [options, setOptions] = useState<Option[]>([]);
  const [searchTerm, setSearchTerm] = useState('')

  const [activeState, setActiveState] = useState(0)
  const [urlState, setUrlState] = useState('')
  const [coordinates, setCoordinates] = useState<[number, number]>([29.60860914023545, 52.531155865995615])

  const { showToast } = useContext(ToastContext) as ToastContextType
  const userToken = useToken()

  const [response, isLoading, error, handlerApi] = useFetch<IApiResponse>("POST", {
    url: ACCEPT_REQUEST_ROUTE,
    values: {
      userToken,
      vehicleUserTypeId: vehicle,
      source: splitLatLng(source),
      destination: splitLatLng(destination)
    }
  })

  const [vehicleResponse, vehicleIsLoading, , handleGetVehicles] = useFetch<IApiResponse>("GET", {
    url: urlState,
    autoFetch: true
  })

  useEffect(() => {
    setUrlState(SEARCH_VEHICLE(searchTerm, userToken))
  }, [searchTerm])

  useEffect(() => {
    if (!vehicleIsLoading && vehicleResponse) {
      if (vehicleResponse.status) {
        setOptions(vehicleResponse.data)
      }
    } else if (!isLoading && error) {
      showToast('error', 'میدونی چرا؟', "مشکلی از سمت سرور پیش آمده است!");
    }
  }, [vehicleIsLoading])

  useEffect(() => {
    if (!isLoading && response) {
      if (response.status) {
        showToast('success', 'یه خبر خوب!', response.message);
        clearForm()
      } else {
        showToast('error', 'میدونی چرا؟', response.message || "مشکلی از سمت سرور پیش آمده است!");
        clearForm()
      }
    } else if (!isLoading && error) {
      showToast('error', 'میدونی چرا؟', "مشکلی از سمت سرور پیش آمده است!");
    }
  }, [isLoading])

  const clearForm = () => {
    setActiveState(0)
    setDestination([0, 0])
    setSource([0, 0])
  }

  const onClickHandler = () => {
    switch (activeState) {
      case 0:
        setSource(coordinates)
        setActiveState(1)
        break
      case 1:
        setDestination(coordinates)
        setActiveState(2)
        break

      case 2:
        handlerApi()
        break

      default:
        setActiveState(0)
        setDestination([0, 0])
        setSource([0, 0])
        break
    }
  }
  return (
    <div className='map-container'>
      <MapBox activeState={activeState} coordinates={coordinates} setCoordinates={setCoordinates} source={source} destination={destination} />
      <div className='map-actions'>
        <ActionBox vehicleIsLoading={vehicleIsLoading} activeState={activeState} options={options} vehicle={vehicle} setVehicle={setVehicle} searchTerm={searchTerm} setSearchTerm={setSearchTerm} onClickHandler={onClickHandler} loading={isLoading} source={source} destination={destination} />
      </div>
    </div>
  )
}