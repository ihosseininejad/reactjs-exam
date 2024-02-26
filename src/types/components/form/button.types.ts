export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    onClick: any;
    disabled: boolean;
    loading: boolean;
    variant: 'outlined' | 'filled'
}