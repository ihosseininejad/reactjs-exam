import OptionItem from './OptionItem'
import { Option, OptionBoxProps } from '../../../types/components/form/autocomplete-types'

export default function OptionBox({ loading, options, setVehicle, setSearchTerm, setShowOptions }: OptionBoxProps) {
    
    const handleSelectOption = (option: Option) => {
        setVehicle(option.id);
        setSearchTerm(option.name);
        setShowOptions(false);
    };
    
    return (
        <>
            {
                loading
                    ? <li className='loading-text'>در حال دریافت...</li>
                    : !options?.length
                        ? <li className='loading-text'>موردی یافت نشد!</li>
                        : options.map((option) => (
                            <OptionItem
                                key={option.id}
                                name={option.name}
                                handleSelect={() => handleSelectOption(option)} />
                        ))
            }
        </>
    )
}