import React, { useState, forwardRef } from 'react';
import { AutoCompleteProps, Option } from '../../../types/components/form/autocomplete-types';
import '../../../styles/components/form/auto-complete.scss'
import OptionBox from './OptionBox';

const AutoComplete: React.FC<AutoCompleteProps> = forwardRef<HTMLInputElement, AutoCompleteProps>(({ searchTerm, setSearchTerm, options, vehicle, setVehicle, loading, ...restProps }, ref) => {

  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    if (event.target.value.length > 1) {
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  };

  const handleClearButtonClick = () => {
    setSearchTerm("");
    setShowOptions(false);
    setSearchTerm("");
    setVehicle(0)
  };

  const handleInputBlur = () => {
    setShowOptions(false);
  };

  

  return (
    <div className='auto-complete'>
      {
        vehicle
          ? (<button className="clear-button" onClick={handleClearButtonClick}>
            حذف
          </button>)
          : null
      }

      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="جستجو نوع وسیله نقلیه"
        onBlur={handleInputBlur}
        ref={ref}
        {...restProps}
      />
      
      {
        showOptions
        && (<ul className='option-container'>
          <OptionBox
            loading={loading}
            options={options}
            setVehicle={setVehicle}
            setSearchTerm={setSearchTerm}
            setShowOptions={setShowOptions} />
        </ul>)
      }
    </div>
  );
});

export default AutoComplete;
