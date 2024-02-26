export interface InputProps extends React.HTMLProps<HTMLInputElement> {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    label?: string;
    required: boolean;
    minLength?: number;
    maxLength?: number;
}