import { useEffect, useState } from 'react'
import { useStateProvider } from '../context/StateContext'
import { defaultCoordinates, reducerCases } from '../utils/constants'
import { ACCEPT_REQUEST_ROUTE } from '../api/apiRoutes'
import { splitCoordinates } from '../utils/helperFunctions'
import useToken from '../hooks/useToken'
import useFetch from '../hooks/useFetch'

import MapBox from '../components/map/MapBox'
import ActionBox from '../components/map/ActionBox'

import { IApiResponse } from '../types/hooks/usefetch.types'
import { LatLngExpression } from 'leaflet'
import '../styles/pages/map.scss'


export default function MapPage() {
  const [source, setSource] = useState<LatLngExpression>([0, 0])
  const [destination, setDestination] = useState<LatLngExpression>([0, 0])
  const [vehicle, setVehicle] = useState(0)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [activeState, setActiveState] = useState(0)
  const [coordinates, setCoordinates] = useState<[number, number]>(defaultCoordinates)

  const [{ }, dispatch] = useStateProvider()
  const userToken = useToken()

  const [response, isLoading, error, sendRequest] = useFetch<IApiResponse>("POST", {
    url: ACCEPT_REQUEST_ROUTE,
    values: {
      userToken,
      vehicleUserTypeId: vehicle,
      source: splitCoordinates(source),
      destination: splitCoordinates(destination)
    }
  })


  useEffect(() => {
    if (!isLoading && response) {
      if (response.status) {
        dispatch({
          type: reducerCases.SHOW_TOAST,
          payload: {
            type: 'success',
            title: 'یه خبر خوب!',
            message: response.message + ` (${response.data?.requestNo})`
          }
        })
        clearForm()
      } else {
        dispatch({
          type: reducerCases.SHOW_TOAST,
          payload: {
            type: 'error',
            title: 'برای اینکه!',
            message: response.message || "مشکلی از سمت سرور پیش آمده است!"
          }
        })
        clearForm()
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
        sendRequest()
        setVehicle(0)
        setSearchTerm("")
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
      <MapBox
        activeState={activeState}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        source={source}
        destination={destination}
      />

      <ActionBox
        activeState={activeState}
        vehicle={vehicle}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setVehicle={setVehicle}
        onClickHandler={onClickHandler}
        loading={isLoading}
        source={source}
        destination={destination}
      />

    </div>
  )
}