export interface AutoCompleteProps {
    searchTerm: string,
    setSearchTerm: (value: string) => void,
    options: any,
    vehicle: number,
    setVehicle: (value: number) => void,
    loading: boolean
}

export interface OptionBoxProps {
    loading: boolean;
    options: Option[];
    setVehicle: (value: number) => void,
    setSearchTerm: (value: string) => void,
    setShowOptions: (value: boolean) => void
}

export interface OptionItemProps {
    name: string,
    handleSelect: () => void
}

export interface Option {
    id: number;
    name: string;
};