import { DestinationMarker, HomeMarker } from '../../utils/iconPack'
import { isZeroZero, splitCoordinates } from '../../utils/helperFunctions'
import { MarkerDetailsProps } from '../../types/components/map.types'

export default function MarkerDetails({ source, destination }: MarkerDetailsProps) {
    return (
        <>
            <p>
                <HomeMarker size={30} />
                مبـــــدا : {splitCoordinates(source)}
            </p>
            {
                !isZeroZero(source) && <p>
                    <DestinationMarker size={30} />
                    مقصد : {splitCoordinates(destination)}
                </p>
            }
        </>
    )
}