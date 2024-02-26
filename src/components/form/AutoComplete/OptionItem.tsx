import { OptionItemProps } from "../../../types/components/form/autocomplete-types";

export default function OptionItem({ name, handleSelect }: OptionItemProps) {
    return (
        <li className='option' onMouseDown={handleSelect}>
            {name}
        </li>
    )
}