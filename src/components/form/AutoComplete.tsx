import React, { useState, useEffect } from 'react';
import '../../styles/option-box.scss'

type Props = {
  searchTerm: string,
  setSearchTerm: (value: string) => void,
  options: any,
  vehicle: number,
  setVehicle: (value: number) => void,
  loading: boolean

}
type Option = {
  id: number;
  name: string;
};

const Autocomplete: React.FC<Props> = ({ searchTerm, setSearchTerm, options, vehicle, setVehicle, loading }) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length > 0) {
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

  const handleSelectOption = (option: Option) => {
    setVehicle(option.id);
    setSearchTerm(option.name);
    setShowOptions(false);
  };

  return (
    <div className='auto-complete'>
      {vehicle ? (
        <button className="clear-button" onClick={handleClearButtonClick}>
          حذف
        </button>
      ) : null}
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="نوع وسیله نقلیه"
        onBlur={handleInputBlur}
      />
      {showOptions && (
        <ul className='option-container'>
          {loading ? <li className='loading-text'>در حال دریافت...</li> :
            options.map((option: Option) => (
              <li key={option.id} className='option' onMouseDown={() => handleSelectOption(option)}>
                {option.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
